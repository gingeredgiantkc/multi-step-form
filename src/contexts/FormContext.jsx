import dayjs from "dayjs";
import { createContext, useState } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
  
  const steps = [
    "Agent",
    "Customer",
    "Data",
    "Voice",
    "Video",
    "Callback",
    "Confirm"
  ]

  const [stepNumber, setStepNumber] = useState(1)
  const [dataSwitch, setDataSwitch] = useState(false);
  const [voiceSwitch, setVoiceSwitch] = useState(false);
  const [videoSwitch, setVideoSwitch] = useState(false);
  const [values, setValues] = useState({
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
    date: '',
    time: '',
  })

  const handleNextStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev + 1);
  };

  const handlePrevStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev - 1);
  };

  return (
    <FormContext.Provider
      value={{
        steps,
        stepNumber,
        setStepNumber,
        values,
        setValues,
        dataSwitch,
        setDataSwitch,
        videoSwitch,
        setVideoSwitch,
        voiceSwitch,
        setVoiceSwitch,
        handlePrevStep,
        handleNextStep,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext 