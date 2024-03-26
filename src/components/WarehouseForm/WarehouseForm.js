import React from "react";

function WarehouseForm() {
  return (
    <form>
      <div className="forms">
        <div className="form">
          <h1>Warehouse Details</h1>
          <label>Warehouse Name</label>
          <input
            type="text"
            id="warehouse-name"
            className=""
            placeholder="API"
          />
          <label>Street Address</label>
          <input type="text" id="address" className="" placeholder="API" />
          <label>City</label>
          <input type="text" id="city" className="" placeholder="API" />
          <label>Country</label>
          <input type="text" id="country" className="" placeholder="API" />
        </div>
        <div className="form">
          <h1>Warehouse Details</h1>
          <label>Contact Name</label>
          <input type="text" id="contact-name" className="" placeholder="API" />
          <label>Position</label>
          <input type="text" id="position" className="" placeholder="API" />
          <label>Phone Number</label>
          <input type="text" id="number" className="" placeholder="API" />
          <label>Email</label>
          <input type="text" id="email" className="" placeholder="API" />
        </div>
      </div>
      <div>
        <button type="submit">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default WarehouseForm;
