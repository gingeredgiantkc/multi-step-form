import React, { createContext, useState } from "react";
import Agent from "./components/Steps/Agent";
import Customer from "./components/Steps/Customer";
import Data from "./components/Steps/Data";
import Voice from "./components/Steps/Voice";
import Video from "./components/Steps/Video";
import Stepper from "./components/Stepper";
import { Box, Card, CardContent } from "@mui/material";

export const FormContext = createContext();
export default function App() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    crisId: '',
    csr: '',
    btn: '',
    cbr: '',
    order: '',
    data: '',
    video: '',
    voice: '',
  };

  const [values, setValues] = useState(initialValues);
  const [stepNumber, setStepNumber] = useState(1);
  const [dataSwitch, setDataSwitch] = useState(false);
  const [voiceSwitch, setVoiceSwitch] = useState(false);
  const [videoSwitch, setVideoSwitch] = useState(false);

  const handleNextStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev + 1);
  };

  const handlePrevStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev - 1);
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      handleNextStep(values);
    }
  };

  const steps = [
    "Agent",
    "Customer",
    "Data",
    "Voice",
    "Video",
    "Callback"
  ]
    
  const stepsArray = [
    <Agent
      next={handleNextStep}
      prev={handlePrevStep}
      data={values}
    />,
    <Customer
      next={handleNextStep}
      prev={handlePrevStep}
      data={values}
    />,
    <Data
      next={handleNextStep}
      prev={handlePrevStep}
      data={values}
    />
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1: {
        return (
          <Agent
            next={handleNextStep}
            prev={handlePrevStep}
            data={values}
          />
        );
      }
      case 2: {
        return (
          <Customer            
            next={handleNextStep}
            prev={handlePrevStep}
            data={values}
          />
        );
      }
      case 3: {
        return (
          <Data
            next={handleNextStep}
            prev={handlePrevStep}
            data={values}
          />
        );
      }
      case 4: {
        return (
          <Voice
            next={handleNextStep}
            prev={handlePrevStep}
            data={values}
          />
        );
      }
      case 5: {
        return (
          <Video
            next={handleNextStep}
            prev={handlePrevStep}
            data={values}
          />
        );
      }
      case 6: {
        return (
          <Callback
            next={handleNextStep}
            prev={handlePrevStep}
            data={values}
          />
        );
      }
      default: return null;
    }
  };

  {/*
    <Agent next={handleNextStep} prev={handlePrevStep} data={values} />,
    <Customer next={handleNextStep} prev={handlePrevStep} data={values} />,
    <Data next={handleNextStep} prev={handlePrevStep} data={values} />
    <Voice next={handleNextStep} prev={handlePrevStep} data={values} />,
    <Video next={handleNextStep} prev={handlePrevStep} data={values} />,
    <Review next={handleNextStep} prev={handlePrevStep} data={values} />,
    <Complete next={handleNextStep} prev={handlePrevStep} data={values} />
  */}
 
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps;

  return (
    <FormContext.Provider
      value={{
        stepNumber,
        setStepNumber,
        values,
        setValues,
        dataSwitch,
        setDataSwitch,
        voiceSwitch,
        setVoiceSwitch,
        videoSwitch,
        setVideoSwitch,
        isLastStep,
        handleNextStep,
        handlePrevStep,
        handleSubmit,
      }}
    >
      <Card
        sx={{
          m: 0,
          mx: 'auto',
          width: {
            xs: "100%",
            md: "50%",
          },
          height: "75%",
          borderRadius: 2,
        }}
      >    
        <CardContent>
          <Box paddingBottom={2}>
            <Stepper 
              steps={steps}
              stepNumber={stepNumber}
            />
          </Box>
          <Box>
            {displayStep(stepNumber)}
          </Box>
        </CardContent>
      </Card>
    </FormContext.Provider>
  );
};

