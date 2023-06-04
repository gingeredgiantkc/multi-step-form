import React, { useContext, useState } from 'react';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import FormikControl from '../FormikControl/FormikControl';
import { FormContext } from '../../App';
import { Switch } from '@mui/material';

const Data = (props) => {
  const { next, prev, data, checked } = props;
  const { stepNumber, isLastStep, isChecked } = useContext(FormContext);

  const handleSubmit = (values) => {
    console.log("data", values);
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={Yup.object().shape({
        data: Yup.string()
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-6 gap-2">
            <div className="col-span-4 col-start-5 text-center">
              <h1 className="text-gray-700 py-6 font-bold text-2xl">Order Change</h1>
            </div>        
            <div className="col-span-5 col-start-2 row-span-2">
                <FormikControl
                  control="textarea"
                  label="Data Service"
                  name="data"
                  disabled={isChecked}
                  placeholder="Enter service and equipment changes here."
                  value={isChecked ? "No service/change" : null}
                />
            </div>
            <div className="row-start-4 col-end-7 place-self-end">
              <Switch
                checked={isChecked}
                onChange={checked}
              />
            </div>
            <div className="row-start-6 col-span-2 col-end-6 self-end justify-self-end">
              <button
                disabled={stepNumber <= 1}
                type="button"
                onClick={() => prev(values)}
                className={`bg-gray-400 text-slate-100 uppercase transition duration-200 ease-in-out border-slate-300
                font-semibold border-2 py-2 px-4 rounded-xl ${stepNumber <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700 hover:text-white cursor-pointer"}`}
              >
                Back 
              </button>
            </div>
            <div className="row-start-6 col-span-2 col-start-8 self-end">
              <button
                type="submit"
                className="bg-green-500 text-slate-100 uppercase transition duration-200 ease-in-out border-slate-300
                hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 py-2 px-4 rounded-xl"
              >
                {isLastStep ? "Done" : "Next"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
};

export default Data;