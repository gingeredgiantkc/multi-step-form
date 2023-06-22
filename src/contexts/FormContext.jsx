import { createContext, useState } from "react";
import dayjs from 'dayjs';

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

  const handleOpen = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setOpen(true);
  };

  const handleClose = (newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
    setOpen(false);
  };

  const handleDateChange = (newDate) => {
    const cbDate = dayjs(newDate).toJSON().slice(0, 10)
    setValues((prev) => ({ ...prev, cbDate }));
  };

  const handleTimeChange = (newTime) => {
    const cbTime = dayjs(newTime).toJSON().slice(11, -5)
    setValues((prev) => ({ ...prev, cbTime }));
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
        handleDateChange,
        handleTimeChange,
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