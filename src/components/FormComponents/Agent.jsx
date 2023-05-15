import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useFormik } from "formik";
import { basicSchema } from "../../schema/BasicSchema";

export default function Agent() {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      crisId: "",
    },
    validationSchema: basicSchema 
  });

  return (
    <div className="container w-75">
      <div className="row">
        <div className="col-4 offset-md-4 text-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Agent Info</h1>
        </div>
      </div>
      <div className="row row-cols-2 mb-4">
        <div className="col">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${
            errors.firstName && touched.firstName
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
            { errors.firstName && touched.firstName
              ? <span className="text-[10px] text-torch-red">
                  <ErrorOutlineIcon fontSize="small" color="error" /> {errors.firstName}
                </span>
              : <span /> }
        </div>
        <div className="col">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${errors.lastName && touched.lastName
            ? "border-torch-red focus:border-torch-red"
            : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
            }`}
            id="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            type="text"
            placeholder="Last Name"
          />
          { errors.lastName && touched.lastName 
            ? <span className="text-[10px] text-torch-red">
              <ErrorOutlineIcon fontSize="small" color="error" /> {errors.lastName}
              </span>
            : <span /> }
        </div>
      </div>
      <div className="row row-cols-2">
        <div className="mb-4 col-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${errors.email && touched.email
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          { errors.email && touched.email ? <div className="text-[10px] text-torch-red">{errors.email}</div> : <div /> }  
        </div>
      </div>
      <div className="row">
        <div className="mb-4 col-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="crisId"
          >
            CRIS ID
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${errors.crisId && touched.crisId
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            id="crisId"
            name="crisId"
            type="text"
            placeholder="CRIS ID"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.crisId}
          />
            { errors.crisId && touched.crisId ? <div className="text-[10px] text-torch-red">{errors.crisId}</div> : <div /> }
        </div>
      </div>
    </div>
  );
}
