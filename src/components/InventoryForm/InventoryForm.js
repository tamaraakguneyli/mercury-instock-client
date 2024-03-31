import React, { useEffect, useState } from "react";
import SelectBox from "../../molecules/SelectBox/SelectBox";
import { FormProvider, useForm } from "react-hook-form";
import apiConfig from "../../apiConfig.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Item name is 'item_name' in the database 'inventories' table
*/

function InventoryForm({ action, apiData }) {
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addStock, setAddStock] = useState(
    apiData?.status === "In Stock" || false
  );

  const nav = useNavigate();
  const methods = useForm();

  const selectedIndex = (arr, value) => {
    return arr.find((object) => {
      return object.label === value;
    });
  };

  const onSubmit = async (data) => {
    data.quantity = data.status !== "In Stock" ? 0 : data.quantity;

    if (action === "add") {
      try {
        await axios.post(
          `${apiConfig.baseUrl}/inventories${apiConfig.urlParam}`,
          data
        );
      } catch (error) {
        console.log(
          "There was an error submitting the new inventory record:",
          error
        );
      }
    }

    if (action === "edit") {
      try {
        await axios.put(
          `${apiConfig.baseUrl}/inventories/${apiData.id}${apiConfig.urlParam}`,
          data
        );
      } catch (error) {
        console.log("There was an error editing the inventory record:", error);
      }
    }

    return nav("/inventory");
  };

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/warehouses${apiConfig.urlParam}`
        );
        setWarehouses(
          data.map((warehouse) => {
            return {
              value: warehouse.id,
              label: warehouse.warehouse_name,
            };
          })
        );
      } catch (error) {
        console.log("Error while fetching warehouses", error);
      }
    };

    const getCategories = async () => {
      try {
        const uniqueCategories = [];
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/inventories${apiConfig.urlParam}`
        );
        data.forEach((entry) => {
          const catObj = { value: entry.category, label: entry.category };
          if (
            !uniqueCategories.find((element) => element.value === catObj.value)
          ) {
            uniqueCategories.push(catObj);
          }
        });
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error while fetching categories", error);
      }
    };

    getWarehouses();
    getCategories();
  }, []);

  // Reset form validation on edit
  useEffect(() => {
    if (apiData) {
      const resetApiData = { ...apiData };
      delete resetApiData.warehouse_name;
      resetApiData.warehouse_id = selectedIndex(
        warehouses,
        apiData.warehouse_name
      )?.value;

      methods.reset(resetApiData);
    }
  }, [apiData, warehouses, methods]);

  if (!warehouses || !categories) {
    return <p>Loading...</p>;
  }

  const handleStockChange = (e) => {
    setAddStock(e.target.value === "In Stock" ? true : false);
  };

  const handleResetClick = (e) => {
    nav("/inventory");
  };

  return (
    <main className="page">
      <article className="page__content">
        <FormProvider {...methods}>
          <form
            method="post"
            name={`inventory-${action}`}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {!action ? (
              <div className="layout">
                <div className="page__top-divider">
                  <p>Provide a form action (edit or add)</p>
                </div>
              </div>
            ) : (
              <>
                <div className="layout">
                  <div className="page__top-divider">
                    <div className="layout__block layout__block--middle-border">
                      <h1 className="layout__headers">Item Details</h1>
                      <label className="layout__form-labels">Item Name</label>
                      <input
                        type="text"
                        name="item_name"
                        className={
                          methods.formState.errors.item_name?.type ===
                          "required"
                            ? "layout__form-inputs layout__form-inputs--error"
                            : "layout__form-inputs"
                        }
                        defaultValue={apiData?.item_name || ""}
                        placeholder={
                          methods.formState.errors.item_name?.type ===
                          "required"
                            ? "Please add an item name"
                            : "Item Name"
                        }
                        {...methods.register("item_name", {
                          required: true,
                          min: 1,
                        })}
                      />
                      <label className="layout__form-labels">Description</label>
                      <textarea
                        name="description"
                        className={
                          methods.formState.errors.description?.type ===
                          "required"
                            ? "layout__form-textarea layout__form-textarea--error"
                            : "layout__form-textarea"
                        }
                        defaultValue={apiData?.description || ""}
                        placeholder={
                          methods.formState.errors.description?.type ===
                          "required"
                            ? "Please enter a brief item description..."
                            : "Item Decscription"
                        }
                        {...methods.register("description", {
                          required: true,
                          min: 5,
                        })}
                      ></textarea>
                      <label className="layout__form-labels">Category</label>
                      <SelectBox
                        name="category"
                        options={categories}
                        selectedOption={
                          apiData?.category &&
                          selectedIndex(categories, apiData.category)
                            ? selectedIndex(categories, apiData.category)
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="page__top-divider">
                    <div className="layout__block">
                      <h1 className="layout__headers">Item Availability</h1>
                      <label className="layout__form-labels">Status</label>
                      <div
                        className="layout__form-radio-section"
                        onChange={handleStockChange}
                      >
                        <div className="layout__form-radio-button">
                          <input
                            type="radio"
                            id="instock"
                            name="status"
                            value={"In Stock"}
                            className="layout__form-radio-button-option"
                            defaultChecked={
                              (apiData?.status &&
                                apiData.status === "In Stock") ||
                              addStock
                            }
                            {...methods.register("status", {
                              required: true,
                            })}
                          />
                          <label
                            htmlFor="instock"
                            className="layout__form-radio-button-label"
                          >
                            In Stock
                          </label>
                        </div>
                        <div className="layout__form-radio-button">
                          <input
                            type="radio"
                            id="oostock"
                            name="status"
                            value={"Out Of Stock"}
                            className="layout__form-radio-button-option"
                            defaultChecked={
                              (apiData?.status &&
                                apiData.status === "Out Of Stock") ||
                              !addStock
                            }
                            {...methods.register("status", {
                              required: true,
                            })}
                          />
                          <label
                            htmlFor="oostock"
                            className="layout__form-radio-button-label"
                          >
                            Out of Stock
                          </label>
                        </div>
                      </div>
                      {addStock && (
                        <>
                          <label className="layout__form-labels">
                            Quantity
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            className={
                              methods.formState.errors.quantity?.type ===
                              "required"
                                ? "layout__form-inputs layout__form-inputs--error"
                                : "layout__form-inputs"
                            }
                            defaultValue={apiData?.quantity || 0}
                            placeholder={
                              methods.formState.errors.quantity?.type ===
                              "required"
                                ? "1"
                                : "Quantity"
                            }
                            {...methods.register("quantity", {
                              required: true,
                              min: 1,
                            })}
                          />
                        </>
                      )}
                      <label className="layout__form-labels">Warehouse</label>
                      <SelectBox
                        name="warehouse_id"
                        options={warehouses}
                        selectedOption={
                          apiData?.warehouse_name &&
                          selectedIndex(warehouses, apiData.warehouse_name)
                            ? selectedIndex(warehouses, apiData.warehouse_name)
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="buttons-block">
                  <button
                    type="reset"
                    onClick={handleResetClick}
                    className="buttons-block__single-button buttons-block__single-button--cancel"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="buttons-block__single-button buttons-block__single-button--save"
                  >
                    {action === "edit" ? "Save" : "+ Add Item"}
                  </button>
                </div>
              </>
            )}
          </form>
        </FormProvider>
      </article>
    </main>
  );
}

export default InventoryForm;
