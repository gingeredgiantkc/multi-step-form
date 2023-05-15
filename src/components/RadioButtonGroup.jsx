import React from "react";

export default function RadioButtonGroup() {
  return (
    <div className="container">
      <div className="row">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="order"
            type="radio"
            id="PI"
            value="PI"
          />
          <label
            className="form-check-label"
            for="PI"
          >
            PI
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="order"
            type="radio"
            id="RI"
            value="RI"
          />
          <label
            className="form-check-label"      
            for="RI"
          >
            RI
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="order"
            type="radio"
            id="RC"
            value="RC"
          />
          <label
            className="form-check-label"
            for="RC"
          >
            RC
          </label>
        </div>    
      </div>
      <div className="row">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="order"
            type="radio"
            id="RO"
            value="RO"
          />
          <label
            className="form-check-label"
            for="RO"
          >
            RO
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="order"
            type="radio"
            id="CC"
            value="CC"
          />
          <label
            for="CC"
          >
            CC
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="order"
            type="radio"
            id="CD"
            value="CD"
          />
          <label
            className="form-check-label"
            for="CD"
          >
            CD
          </label>
        </div>
      </div>
    </div>
  )
}