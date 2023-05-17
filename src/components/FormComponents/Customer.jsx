import React from "react";
import {  useFormikContext } from "formik";
import { validationSchema } from "../../schema/ValidationSchema";
import Navigation from "./Navigation";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Customer = ({ values, handleChange, handleClick, steps, currentStep }) => {
  const { errors, touched, handleBlur, handleSubmit } = useFormikContext({
    initialValues: {values},
    validationSchema: validationSchema,
  });

  return (
    <div className="grid">
      <div className="row">
        <div className="col-4 offset-md-4 text-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Customer Info</h1>
        </div>
      </div>
      <div className="row flex-justify-around mb-4">
        <div className="cell-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="csr"
          >
            Customer Name
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${errors.csr && touched.csr
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            id="csr"
            name="csr"
            type="text"
            placeholder="Customer Name"
            value={values.csr}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.csr && touched.csr
            ? <span className="text-[12px] text-torch-red">
            <ErrorOutlineIcon fontSize="small" color="error" /> {errors.csr}
            </span>
						: <span /> }
        </div>
        <div className="cell-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="btn"
          >
            BTN
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${errors.btn && touched.btn
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            id="btn"
            name="btn"
            type="text"
            placeholder="BTN"
            value={values.btn}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          { errors.btn && touched.btn
           	? <span className="text-[12px] text-torch-red">
              <ErrorOutlineIcon fontSize="small" color="error" /> {errors.btn}
              </span>
						: <span /> }
        </div>
      </div>
      <div className="row row-col-2 mb-4">
        <div className="col">
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
              htmlFor="PI"
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
              htmlFor="RI"
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
              htmlFor="RC"
            >
              RC
            </label>
          </div>    
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
              htmlFor="RO"
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
              htmlFor="CC"
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
              htmlFor="CD"
            >
              CD
            </label>
          </div>
        </div>
        <div className="col">
        </div>
        <div className="flex items-center justify-between" />
      </div>
      <div className="row flex-align-end flex-justify-center">
        <Navigation
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          steps={steps}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default Customer;
