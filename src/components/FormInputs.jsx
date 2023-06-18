import React from "react";
import useFormContext from "../hooks/useFormContext"
import Agent from "./Steps/Agent";
import Customer from "./Steps/Customer";
import Data from "./Steps/Data";
import Voice from "./Steps/Voice";
import Video from "./Steps/Video";
import Callback from "./Steps/Callback";
import Confirm from "./Steps/Confirm";
import Success from "./Steps/Success";

const FormInputs = () => {

  const { steps, stepNumber, handleNextStep } = useFormContext()

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps;
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

  const displayStep = (step) => {
    switch(step) {
      case 1: {
        return (
          <Agent />
        );
      }
      case 2: {
        return (
          <Customer />
        );
      }
      case 3: {
        return (
          <Data />
        );
      }
      case 4: {
        return (
          <Voice />
        );
      }
      case 5: {
        return (
          <Video />
        );
      }
      case 6: {
        return (
          <Callback />
        );
      }
      case 7: {
        return (
          <Confirm />
        );
      }
      case 8: {
        return (
          <Success />
        );
      }
      default: return null;
    }
  }

  const content = (
    <React.Fragment>
      {displayStep(stepNumber)}
    </React.Fragment>
  )

  return content
}
export default FormInputs