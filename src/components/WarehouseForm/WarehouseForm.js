import React from "react";
import "../WarehouseForm/WarehouseForm.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import apiConfig from "../../apiConfig.json";
import axios from "axios";

/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Warehouse name is 'warehouse_name' in the database 'warehouses' table
*/

function WarehouseForm({ action, apiData }) {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id: warehouseId } = useParams();

  const onSubmit = async (data) => {
    console.log(data);
    if (action === "add") {
      try {
        await axios.post(
          `${apiConfig.baseUrl}/warehouse${apiConfig.urlParam}`,
          data
        );
      } catch (error) {
        console.log(
          "There was an error adding the new warehouse record:",
          error
        );
      }
    }

    if (action === "edit") {
      try {
        await axios.put(
          `${apiConfig.baseUrl}/warehouse/${warehouseId}${apiConfig.urlParam}`,
          data
        );
      } catch (error) {
        console.log("There was an error editing the warehouse record:", error);
      }
    }
    nav("/warehouses");
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
                      className={
                        errors.address?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.address || ""}
                      placeholder={
                        errors.address?.type === "required"
                          ? "Please add a street address"
                          : "Street Address"
                      }
                      {...register("address", {
                        required: true,
                      })}
                      aria-invalid={errors.address ? "true" : "false"}
                    />
                    <label className="layout__form-labels">City</label>
                    <input
                      type="text"
                      name="city"
                      className={
                        errors.city?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.city || ""}
                      placeholder={
                        errors.city?.type === "required"
                          ? "Please add a city"
                          : "City"
                      }
                      {...register("city", {
                        required: true,
                      })}
                      aria-invalid={errors.city ? "true" : "false"}
                    />
                    <label className="layout__form-labels">Country</label>
                    <input
                      type="text"
                      name="country"
                      className={
                        errors.country?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.country || ""}
                      placeholder={
                        errors.country?.type === "required"
                          ? "Please add a country"
                          : "Country"
                      }
                      {...register("country", {
                        required: true,
                      })}
                      aria-invalid={errors.country ? "true" : "false"}
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
                      className={
                        errors.contact_name?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.contact_name || ""}
                      placeholder={
                        errors.contact_name?.type === "required"
                          ? "Please add a contact name"
                          : "Contact Name"
                      }
                      {...register("contact_name", {
                        required: true,
                      })}
                      aria-invalid={errors.contact_name ? "true" : "false"}
                    />
                    <label className="layout__form-labels">Position</label>
                    <input
                      type="text"
                      name="contact_position"
                      className={
                        errors.contact_position?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.contact_position || ""}
                      placeholder={
                        errors.contact_position?.type === "required"
                          ? "Please add a contact position"
                          : "Contact Position"
                      }
                      {...register("contact_position", {
                        required: true,
                      })}
                      aria-invalid={errors.contact_name ? "true" : "false"}
                    />
                    <label className="layout__form-labels">Phone Number</label>
                    <input
                      type="text"
                      name="contact_phone"
                      className={
                        errors.contact_phone?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.contact_phone || ""}
                      placeholder={
                        errors.contact_phone?.type === "required"
                          ? "Please add a contact phone number"
                          : "Contact Phone"
                      }
                      {...register("contact_phone", {
                        required: true,
                      })}
                    />
                    <label className="layout__form-labels">Email</label>
                    <input
                      type="text"
                      name="contact_email"
                      className={
                        errors.contact_email?.type === "required"
                          ? "layout__form-inputs layout__form-inputs--error"
                          : "layout__form-inputs"
                      }
                      defaultValue={apiData?.contact_email || ""}
                      placeholder={
                        errors.contact_email?.type === "required"
                          ? "Please add a contact email address"
                          : "Contact Email"
                      }
                      {...register("contact_email", {
                        required: true,
                      })}
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
