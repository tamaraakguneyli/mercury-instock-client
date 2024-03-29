import React, { useEffect, useState } from "react";
import SelectBox from "../../molecules/SelectBox/SelectBox";
import { FormProvider, useForm } from "react-hook-form";
import apiConfig from "../../apiConfig.json";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Item name is 'item_name' in the database 'inventories' table
*/

function InventoryForm({ action, apiData }) {
  const [warehouses, setWarehouses] = useState(null);
  const [categories, setCategories] = useState(null);
  const nav = useNavigate();

  const methods = useForm();

  const { id: inventoryId } = useParams();

  const onSubmit = async (data) => {
    if (action === "add") {
      await axios.post(
        `${apiConfig.baseUrl}/inventory${apiConfig.urlParam}`,
        data
      );
    }
    nav("/inventory");

    if (action === "edit") {
      await axios.put(
        `${apiConfig.baseUrl}/warehouse/${apiData.id}${apiConfig.urlParam}`,
        data
      );
    }
    nav("/inventory");
  };

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/warehouse${apiConfig.urlParam}`
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
          `${apiConfig.baseUrl}/inventory${apiConfig.urlParam}`
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

  if (!warehouses || !categories) {
    return <p>Loading...</p>;
  }

  const selectedCategoryIndex = (categoryName) => {
    return categories.findIndex((category) => {
      return category.label === categoryName;
    });
  };

  const selectedWarehouseIndex = (warehouseName) => {
    return warehouses.findIndex((warehouse) => {
      return warehouse.label === warehouseName;
    });
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
                        })}
                      />
                      <label className="layout__form-labels">Description</label>
                      <textarea
                        name="description"
                        className={
                          methods.formState.errors.description?.type ===
                          "required"
                            ? "layout__form-inputs layout__form-inputs--error"
                            : "layout__form-inputs"
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
                        })}
                      ></textarea>
                      <label className="layout__form-labels">Category</label>
                      <SelectBox
                        name="category"
                        options={categories}
                        selectedOption={
                          apiData?.category &&
                          selectedCategoryIndex(apiData.category) !== -1
                            ? categories[
                                selectedCategoryIndex(apiData.category)
                              ]
                            : ""
                        }
                        formMethods={methods}
                      />
                    </div>
                  </div>
                  <div className="page__top-divider">
                    <div className="layout__block">
                      <h1 className="layout__headers">Item Availability</h1>
                      <label className="layout__form-labels">Status</label>
                      <div className="layout__form-radio-section">
                        <div className="layout__form-radio-button">
                          <input
                            type="radio"
                            id="instock"
                            name="status"
                            defaultValue="true"
                            selected={apiData?.status === true || false}
                            {...methods.register("status", {
                              required: true,
                            })}
                          />
                          <label htmlFor="instock">In Stock</label>
                        </div>
                        <div className="layout__form-radio-button">
                          <input
                            type="radio"
                            id="oostock"
                            name="status"
                            defaultValue="false"
                            selected={apiData?.status === false || false}
                            {...methods.register("status", {
                              required: true,
                            })}
                          />
                          <label htmlFor="oostock">Out of Stock</label>
                        </div>
                      </div>
                      <label className="layout__form-labels">Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        className={
                          methods.formState.errors.quantity?.type === "required"
                            ? "layout__form-inputs layout__form-inputs--error"
                            : "layout__form-inputs"
                        }
                        defaultValue={apiData?.quantity || ""}
                        placeholder={
                          methods.formState.errors.quantity?.type === "required"
                            ? "0"
                            : "Quantity"
                        }
                        {...methods.register("quantity", {
                          required: true,
                        })}
                      />
                      <label className="layout__form-labels">Warehouse</label>
                      <SelectBox
                        name="warehouse_id"
                        options={warehouses}
                        selectedOption={
                          apiData?.warehouse_name &&
                          selectedWarehouseIndex(apiData.warehouse_name) !== -1
                            ? warehouses[
                                selectedWarehouseIndex(apiData.warehouse_name)
                              ]
                            : ""
                        }
                        formMethods={methods}
                      />
                    </div>
                  </div>
                </div>
                <div className="buttons-block">
                  <button
                    type="reset"
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
