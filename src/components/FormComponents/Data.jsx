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
    <div className="mx-auto grid w-4/5 grid-flow-row">
      <div className="bg-white shadow-xl drop-shadow-xl col-span-3 h-[550px] px-12 pt-16 pb-2 mt-8 mb-0 rounded-md">
        <div className="gap-4 place-content-center mx-auto items-center z-0">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl col-start-3 items-center">Data</h1>
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