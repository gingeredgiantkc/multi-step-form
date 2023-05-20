import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Navigation from "./Navigation";
import TextField from "./TextField";
import { useFormikContext } from "formik";

const Agent = ({ handleClick, steps, currentStep, ...otherProps }) => {
  const { 
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  } = useFormikContext()

  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      <Grid xs={4} xsOffset={4} text-center>
        <h1 className="text-gray-700 pb-6 pt-8 font-bold text-2xl">Agent Info</h1>
      </Grid>
      <div className="row flex-justify-around mb-4">
        <div className="cell-5">
          <TextField
            className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${
            errors.firstName && touched.firstName
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            name="firstName"
            label="First Name"
            value={values.firstName}
          />
        </div>
        <div className="cell-5">
          <TextField
            className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${errors.lastName && touched.lastName
            ? "border-torch-red focus:border-torch-red"
            : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
            }`}
            name="lastName"
            label="Last Name"
            value={values.lastName}
          />
        </div>
      </div>
      <div className="row row-cols-2">
        <div className="mb-4 col-6">
          <TextField
            className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${errors.email && touched.email
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            name="email"
            label="Email"
            value={values.email}
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-4 col-6">
          <TextField
            className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${errors.crisId && touched.crisId
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            name="crisId"
            label="CRIS ID"
            value={values.crisId}
          />
        </div>
      </div>
      <div className="row flex-align-end flex-justify-center">
        <Navigation
          handleClick={handleClick}
          steps={steps}
          currentStep={currentStep}
        />
      </div>
    </Grid>
  );
}
 export default Agent;