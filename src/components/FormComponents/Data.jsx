import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../../schema/BasicSchema';

const Data = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      data: "",
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-md-4 text-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Data</h1>
        </div>
        <div className="grid grid-col-3 gap-4">
          <div className="mb-4 col-start-1 col-end-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fn"
            >
              Data
            </label>
            <textarea
              className={`shadow appearance-none rounded bg-slate-100 w-full py-2 px-3 border-2 ${errors.data && touched.data
              ? "border-torch-red"
              : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"
              }`}
              id="data"
              name="data"
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.data}
            />
            { errors.data && touched.data ? <div>{errors.data}</div> : <div /> }
          </div>
        </div>
        <div className="flex items-center justify-between" />
      </div>
    </div>
  );
};

export default Data;