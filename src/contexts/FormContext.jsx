import { createContext, useState } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

  const title = {
    1: "Agent Info",
    2: "Customer Info",
    3: "Order Change",
    4: "Order Change",
    5: "Order Change",
    6: "Follow-Up",
    7: "Review & Submit"
  }

  const steps = [
    "Agent",
    "Customer",
    "Data",
    "Voice",
    "Video",
    "Callback",
    "Confirm"
  ]

  const [page, setPage] = useState(0)
  const [stepNumber, setStepNumber] = useState(1)
  const [dataSwitch, setDataSwitch] = useState(false);
  const [voiceSwitch, setVoiceSwitch] = useState(false);
  const [videoSwitch, setVideoSwitch] = useState(false);
  const [values, setValues] = useState({
    campaign: 'Frontier',
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
  })

  const handleChange = e => {
    const type = e.target.type
    const name = e.target.name
    const value = type === "checkbox"
      ? e.target.checked
      : e.target.value
    setValues(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleNextStep = (newValues) => {
    console.log(values);
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev + 1);
  };

  const handlePrevStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev - 1);
  };

  const { campaign, ...requiredInputs } = values
  const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

  return (
    <FormContext.Provider
      value={{
        title,
        steps,
        page,
        setPage,
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
        canSubmit,
        handleChange,
        handlePrevStep,
        handleNextStep,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext 