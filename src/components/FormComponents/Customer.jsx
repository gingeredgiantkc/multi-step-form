import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schema/BasicSchema";

const Customer = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      csr: "",
      btn: "",
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="container w-75">
      <div className="row">
        <div className="col-4 offset-md-4 text-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Customer Info</h1>
        </div>
      </div>
      <div className="row row-cols-2 mb-4">
        <div className="col">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="csr"
          >
            Customer Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="csr"
            name="csr"
            type="text"
            placeholder="Customer Name"
            value={values.csr}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.csr && touched.csr ? <div className="text-[10px] text-torch-red">{errors.csr}</div> : <div /> }
        </div>
        <div className="col">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="btn"
          >
            BTN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="btn"
            name="btn"
            type="text"
            placeholder="BTN"
            value={values.btn}
            onChange={handleChange}
          />
          { errors.btn && touched.btn ? <div className="text-[10px] text-torch-red">{errors.btn}</div> : <div /> }
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
          <div className="col" />
          <div className="col">
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
          </div>
          <div className="col" />
          <div className="col">
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
        <div className="flex items-center justify-between" />
      </div>
    </div>
  );
};

export default Customer;
