import React, { useContext } from "react";
import { useFormik } from "formik";
import { PageContext } from "../../contexts/PageContext"
import * as yup from "yup";

const Agent = ({ onChange }) => {
  const { values, setValues } = useContext(PageContext);
  const { errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      crisId: "",
    },
    validationSchema: yup.object({
      fn: yup
        .string('Enter your first name')
        .min(2, 'Must contain 2 characters')
        .required('First name is required'),
      ln: yup
        .string('Enter your last name')
        .min(2, { message: 'Must contain 2 characaters' })
        .required('Last name is required'),
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      crisId: yup
        .string('Enter your CRIS ID')
        .matches(/^[0-9]{6}$/, { message: 'ID is 6 digits only' })
        .required('CRIS ID is required'),
    })
  });

  return (
    <div className="container w-75">
      <div className="row">
        <div className="col-4 offset-md-4 text-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Agent Info</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${errors.fn && touched.fn
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
            }`}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            onBlur={handleBlur}
            value={values.fn}
          />
          { errors.fn && touched.fn ? <div className="text-[10px] text-torch-red">{errors.fn}</div> : <div /> }
        </div>
        <div className="col-6  me-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${errors.ln && touched.ln
            ? "border-torch-red focus:border-torch-red"
            : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
            }`}
            id="lastName"
            name="lastName"
            onChange={onChange}
            onBlur={handleBlur}
            value={values.lastName}
            type="text"
            placeholder="Last Name"
          />
          { errors.ln && touched.ln ? <div className="text-[10px] text-torch-red">{errors.ln}</div> : <div /> }
        </div>
      </div>
      <div className="row">
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
            onChange={onChange}
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
            onChange={onChange}
            onBlur={handleBlur}
            value={values.crisId}
          />
          { errors.crisId && touched.crisId ? <div className="text-[10px] text-torch-red">{errors.crisId}</div> : <div /> }
        </div>
      </div>
    </div>
  );
}
export default Agent;