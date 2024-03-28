import React, { useEffect, useState } from "react";
import SelectBox from "../../molecules/SelectBox/SelectBox";
import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      // TODO axios PUT call
    }
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

  return (
    <main className="page">
      <article className="page__content">
        <form
          method="post"
          name={`inventory-${action}`}
          onSubmit={handleSubmit(onSubmit)}
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
                        errors.item_name?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.item_name || ""}
                      placeholder={
                        errors.item_name?.type === "required"
                          ? "Please add an item name"
                          : "Item Name"
                      }
                      {...register("item_name", {
                        required: true,
                      })}
                    />
                    <label className="layout__form-labels">Description</label>
                    <textarea
                      name="description"
                      className={
                        errors.description?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.description || ""}
                      placeholder={
                        errors.description?.type === "required"
                          ? "Please enter a brief item description..."
                          : "Item Decscription"
                      }
                      {...register("description", {
                        required: true,
                      })}
                    ></textarea>
                    <label className="layout__form-labels">Category</label>
                    <SelectBox
                      name="category"
                      options={categories}
                      selectedOption={apiData?.category || ""}
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
                          {...register("status", {
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
                          {...register("status", {
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
                        errors.quantity?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.quantity || ""}
                      placeholder={
                        errors.quantity?.type === "required" ? "0" : "Quantity"
                      }
                      {...register("quantity", {
                        required: true,
                      })}
                    />
                    <label className="layout__form-labels">Warehouse</label>
                    <SelectBox
                      name="warehouse_id"
                      options={warehouses}
                      selectedOption={apiData?.warehouse_id || ""}
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
      </article>
    </main>
  );
}

export default InventoryForm;
