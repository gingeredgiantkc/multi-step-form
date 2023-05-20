import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {  useFormikContext } from "formik";
import Navigation from "../FormComponents/Navigation";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import orders from "../../data/orders.json"

const Customer = ({ values, handleSubmit, handleChange, handleClick, steps, currentStep }) => {
  const { errors, touched, handleBlur } = useFormikContext({
    initialValues: {values},
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
                <ErrorOutlineIcon fontSize="small" color="error" />{errors.btn}
              </span>
            : <span /> }
          </div>
        </div>
        <div className="row flex-justify-around mb-4">
          <div className="cell-5">
            <Select
              name="order"
              label="Order Type"
              options={orders}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Navigation
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
            complete={complete}
          />
        </div>
      </div>
    </form>
  );
};

export default Customer;