import { Box, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import { Formik } from 'formik';
import Stepper from "./Stepper";
import Agent from './Agent';
import Customer from './Customer';
import Data from "./Data";

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

  const [values, setValues] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(1);

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
            values={values}
            handleChange={handleChange}
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
      setCurrentStep(newStep)
    }
    console.log("values", values)
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <Formik>
      <Card sx={{
        m: 0,
        mx: 'auto',
        width: "50%",
      }}>
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