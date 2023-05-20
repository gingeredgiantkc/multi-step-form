import { Box, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import Stepper from "./Stepper";
import Agent from './Agent';
import Customer from '../Pages/Customer';
import Data from '../Pages/Data';

export default function ParentComponent() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    crisId: '',
    csr: '',
    btn: '',
    order: '',
    data: '',
    voice: '',
    video: '',
  };

const validationSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .min(2, 'Must contain 2 characters')
    .required('Required'),
  lastName: Yup
    .string()
    .min(2, 'Must contain 2 characaters')
    .required('Required'),
  email: Yup
    .string()
    .email('Enter a valid email')
    .required('Required'),
  crisId: Yup
    .string()
    .matches(/^[0-9]{6}$/, 'ID is 6 digits only')
    .required('Required'),
  csr: Yup
    .string()
    .required('Required'),
  btn: Yup
    .string()
    .matches(/^[0-9]{10}$/, 'Only numbers allowed')
    .required('Required'),
  order: Yup
    .string()
    .required('Required'),
  data: Yup
    .string()
    .required('Required'),
  voice: Yup
    .string()
    .required('Required'),
  video: Yup.string()
    .required('Required'),
});

  const [values, setValues] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const stepArray = [
    "Agent",
    "Customer",
    "Data"
  ];

  const steps = stepArray;
  const displayStep = (step) => {
    switch (step) {
      case 1: {
        return (
          <Agent
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        );
      }
      case 2: {
        return (
          <Customer            
            values={values}
            handleChange={handleChange}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
            steps={steps}
            currentStep={currentStep}
          />
        );
      }
      case 3: {
        return (
          <Data
            values={values}
            handleChange={handleChange}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
            steps={steps}
            currentStep={currentStep}
          />
        );
      }
      default: return null;
    }
  };
  
  const handleClick = (clickType) => {
    let newStep = currentStep;
    (clickType == "next") ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
      if (newStep === steps.length) {
        setComplete(true);
      };
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Card
        sx={{
        m: 0,
        mx: 'auto',
        width: "50%",
        height: "80%"
        }}
      >
        <CardContent>
          <Box paddingBottom={2}>
            <Stepper
              steps={steps}
              currentStep={currentStep}
            />
          </Box>
          <Box paddingBottom={2}>
            {displayStep(currentStep)}
            </Box>
        </CardContent>
      </Card>
    </Formik>
  );
}