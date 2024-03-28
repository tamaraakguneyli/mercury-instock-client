import React from "react";
import "../WarehouseForm/WarehouseForm.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../apiConfig.json";
import axios from "axios";

/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Warehouse name is 'warehouse_name' in the database 'warehouses' table
*/

function WarehouseForm({ action, apiData }) {
  const { id: warehouseId } = useParams();
  const [editWarehouse, setEditWarehouse] = useState(false);
  const [formData, setFormData] = useState({
    warehouseName: "",
    warehouseAddress: "",
    city: "",
    country: "",
    contactName: "",
    contactPosition: "",
    contactPhone: "",
    contactEmail: "",
  });

  const changeHandler = (event) => {
    console.log(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    console.log(form);

    axios.put(
      `${apiConfig.baseUrl}/warehouse/${warehouseId}${apiConfig.urlParam}`,
      {
        warehouseName: form.warehouse_name.value,
        warehouseAddress: form.address.value,
        city: form.city.value,
        country: form.country.value,
        contactName: form.contact_name.value,
        contactPosition: form.contact_position.value,
        contactPhone: form.contact_phone.value,
        contactEmail: form.contact_email.value,
      }
    );

    setEditWarehouse(true);
    setTimeout(() => {
      nav("/");
    }, 1000);
  };

  return (
    <main className="page">
      <article className="page__content">
        <form
          method="post"
          name={`warehouse-${action}`}
          onSubmit={handleSubmit}
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
                      className="layout__form-inputs"
                      value={apiData?.warehouse_name || ""}
                      placeholder="Warehouse Name"
                      onChange={changeHandler}
                    />
                    <label className="layout__form-labels">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="layout__form-inputs"
                      value={apiData?.address || ""}
                      placeholder="Street Address"
                      onChange={changeHandler}
                    />
                    <label className="layout__form-labels">City</label>
                    <input
                      type="text"
                      name="city"
                      className="layout__form-inputs"
                      value={apiData?.city || ""}
                      placeholder="City"
                      onChange={changeHandler}
                    />
                    <label className="layout__form-labels">Country</label>
                    <input
                      type="text"
                      name="country"
                      className="layout__form-inputs"
                      value={apiData?.country || ""}
                      placeholder="Country"
                      onChange={changeHandler}
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
                      value={apiData?.contact_name || ""}
                      placeholder="Contact Name"
                      onChange={changeHandler}
                    />
                    <label className="layout__form-labels">Position</label>
                    <input
                      type="text"
                      name="contact_position"
                      className="layout__form-inputs"
                      value={apiData?.contact_position || ""}
                      placeholder="Position"
                      onChange={changeHandler}
                    />
                    <label className="layout__form-labels">Phone Number</label>
                    <input
                      type="text"
                      name="contact_phone"
                      className="layout__form-inputs"
                      value={apiData?.contact_phone || ""}
                      placeholder="Phone Number"
                      onChange={changeHandler}
                    />
                    <label className="layout__form-labels">Email</label>
                    <input
                      type="text"
                      name="contact_email"
                      className="layout__form-inputs"
                      value={apiData?.contact_email || ""}
                      placeholder="Email"
                      onChange={changeHandler}
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
