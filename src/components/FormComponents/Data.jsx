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
    <>
{/**  <div className="container"> */}
      <div className="row">
        <div className="col-4 offset-md-4 text-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Data</h1>
        </div>
        <div className="row">
          <div className="mb-4 col-8 offset-md-2">
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
  {/**  </div> */}
    </>
  );
};

export default Data;