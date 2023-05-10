import { Box, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import { PageContext } from '../../contexts/PageContext';
import Navigation from "./Navigation";
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
  const [finalValues, setFinalValues] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const stepArray = [
    "Agent",
    // "Location",
    // "Service Offered",
    "Customer",
    "Data"
  ];

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "radio" ? checked : value });
  };

  const steps = stepArray;
  const displayStep = (step) => {
    switch (step) {
      case 1: {
        return (
          <Agent formValues={values} onChange={onChange} />
        );
      }
      case 2: {
        return (
          <Customer formValues={values} onChange={onChange} />
        );
      }
      case 3: {
        return (
          <Data formValues={values} onChange={onChange} />
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
  };

  return (
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
{/**      <MultiStepForm
            initialValues={{
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
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values,null,2));
            }}
          >
          <FormStep onSubmit={() => console.log('Step1 subnmit')}>      */}
          <PageContext.Provider value={{
            values,
            setValues,
            finalValues,
            setFinalValues,
            onChange
          }}>
              {displayStep(currentStep)}
            {/**</FormStep>
          </MultiStepForm> */}
          </PageContext.Provider>
        </Box>
        <Box paddingBottom={2}>
          <Navigation
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
