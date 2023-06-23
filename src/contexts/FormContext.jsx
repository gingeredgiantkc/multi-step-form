import { createContext, useState } from "react";
const FormContext = createContext({})

export const FormProvider = ({ children }) => {
  
  const steps = [
    "Agent",
    "Customer",
    "Order",
    "Callback",
    "Confirm"
  ]

  const [open, setOpen] = useState(false)
  const [stepNumber, setStepNumber] = useState(1)
  const [data, setData] = useState(false);
  const [voice, setVoice] = useState(false);
  const [video, setVideo] = useState(false);
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
    date: null,
    time: null,
  })

  const handleNextStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev + 1);
  };

  const handlePrevStep = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setStepNumber((prev) => prev - 1);
  };

  const handleOpen = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setOpen(true);
  };

  const handleClose = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setOpen(false);
  };

  const handleNewData = () => setData(!data)
  const handleNewVoice = () => setVoice(!voice)
  const handleNewVideo = () => setVideo(!video)

  return (
    <FormContext.Provider
      value={{
        steps,
        open,
        setOpen,
        stepNumber,
        setStepNumber,
        values,
        setValues,
        data,
        setData,
        video,
        setVideo,
        voice,
        setVoice,
        handlePrevStep,
        handleNextStep,
        handleOpen,
        handleClose,
        handleNewData,
        handleNewVoice,
        handleNewVideo,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext 