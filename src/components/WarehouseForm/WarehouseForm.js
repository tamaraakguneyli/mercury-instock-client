import React from "react";
import "../WarehouseForm/WarehouseForm.scss";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import apiConfig from "../../apiConfig.json";
import axios from "axios";

/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Warehouse name is 'warehouse_name' in the database 'warehouses' table
*/

function WarehouseForm({ action, apiData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id: warehouseId } = useParams();

  const onSubmit = async (data) => {
    if (action === "add") {
      // TODO axios POST call
    }

    if (action === "edit") {
      axios.put(
        `${apiConfig.baseUrl}/warehouse/${warehouseId}${apiConfig.urlParam}`,
        data
      );
    }
  };

  return (
    <main className="page">
      <article className="page__content">
        <form
          method="post"
          name={`warehouse-${action}`}
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
                    <h1 className="layout__headers">Warehouse Details</h1>
                    <label className="layout__form-labels">
                      Warehouse Name
                    </label>
                    <input
                      type="text"
                      name="warehouse_name"
                      className={
                        errors.warehouse_name?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.warehouse_name || ""}
                      placeholder={
                        errors.warehouse_name?.type === "required"
                          ? "Please add warehouse name"
                          : "Warehouse Name"
                      }
                      {...register("warehouse_name", {
                        required: true,
                      })}
                      aria-invalid={errors.warehouse_name ? "true" : "false"}
                    />
                    <label className="layout__form-labels">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="layout__form-inputs"
                      defaultValue={apiData?.address || ""}
                      placeholder="Street Address"
                      {...register("address")}
                    />
                    <label className="layout__form-labels">City</label>
                    <input
                      type="text"
                      name="city"
                      className="layout__form-inputs"
                      defaultValue={apiData?.city || ""}
                      placeholder="City"
                      {...register("city")}
                    />
                    <label className="layout__form-labels">Country</label>
                    <input
                      type="text"
                      name="country"
                      className="layout__form-inputs"
                      defaultValue={apiData?.country || ""}
                      placeholder="Country"
                      {...register("country")}
                    />
                  </div>
                </div>
                <div className="page__top-divider">
                  <div className="layout__block">
                    <h1 className="layout__headers">Contact Details</h1>
                    <label className="layout__form-labels">Contact Name</label>
                    <input
                      type="text"
                      name="contact_name"
                      className="layout__form-inputs"
                      defaultValue={apiData?.contact_name || ""}
                      placeholder="Contact Name"
                      {...register("contact_name")}
                    />
                    <label className="layout__form-labels">Position</label>
                    <input
                      type="text"
                      name="contact_position"
                      className="layout__form-inputs"
                      defaultValue={apiData?.contact_position || ""}
                      placeholder="Position"
                      {...register("contact_position")}
                    />
                    <label className="layout__form-labels">Phone Number</label>
                    <input
                      type="text"
                      name="contact_phone"
                      className="layout__form-inputs"
                      defaultValue={apiData?.contact_phone || ""}
                      placeholder="Phone Number"
                      {...register("contact_phone")}
                    />
                    <label className="layout__form-labels">Email</label>
                    <input
                      type="text"
                      name="contact_email"
                      className="layout__form-inputs"
                      defaultValue={apiData?.contact_email || ""}
                      placeholder="Email"
                      {...register("contact_email")}
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
                  {action === "edit" ? "Save" : "+ Add Warehouse"}
                </button>
              </div>
            </>
          )}
        </form>
      </article>
    </main>
  );
}

export default WarehouseForm;
