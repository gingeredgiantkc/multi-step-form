import React, { useState } from "react";
import { StepperContext } from './contexts/StepperContext'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import FormAgent from "./components/FormComponents/FormAgent";
import FormCustomer from "./components/FormComponents/FormCustomer";
import FormData from "./components/FormComponents/FormData";

const ParentComponent = () => {
  const steps = [
    "Agent",
    "Customer",
    "Data",
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const initialValues = {
    fn: "",
    ln: "",
    email: "",
    crisId: "",
    csr: "",
    btn: "",
    order: "",
    data: "",
    voice: "",
    video: "",
  };
  const [values, setValues] = useState(initialValues);

  const displayStep = (step) => {
    switch (step) {
      case 1: {
        return (
          <div>
            <FormAgent
              formValues={values}
              onChange={onChange}
            ></FormAgent>
          </div>
        );
      }
      case 2: {
        return (
          <FormCustomer
            formValues={values}
            onChange={onChange}
          ></FormCustomer>
        );
      }
      case 3: {
        return (
          <FormData
            formValues={values}
            onChange={onChange}
          ></FormData>
        );
      }
      default:
        return null;
    }
  };
/*
  const states = [
    { id: "0", name: "Paris" },
    { id: "1", name: "London" },
    { id: "2", name: "Berlin" },
    { id: "3", name: "Warsaw" },
  ];
*/

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <React.Fragment>
      <div id="form-base" className="col-start-2 col-span-3">
        <div className="items-center content-center self-center">
          <Stepper
            steps={steps}
            currentStep={currentStep}
          />
        </div>
        { /* Display Components */ }
        <div className="">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        {/* Navigation Controls */ }
        <div className="row-start-1 z-auto">
          <StepperControl 
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParentComponent;