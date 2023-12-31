import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Callback = () => {
  const {
    values,
    selectedDate,
    selectedTime,
    handleNextStep,
    handlePrevStep,
    handleDateChange,
    handleTimeChange
  } = useFormContext();

  const theme = createTheme({
    palette: {
      primary: {
        light: '#4ed07e',
        main: '#22c55e',
        dark: '#178941',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#afb5bf',
        main: '#9ca3af',
        dark: '#6d727a',
        contrastText: '#ffffff'
      },
    },
  });

  const handleSubmit = (values) => {
    console.log("data", values);
    handleNextStep(values);
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={Yup.object().shape({
        date: Yup.date().required('Required').nullable(),
        time: Yup.date().required('Required').nullable(),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-4 gap-2">
            <div className="col-span-full text-center text-gray-700 pt-3 my-auto font-bold text-2xl">
              Scheduled Follow-Up
            </div>        
            <div className="row-start-2 col-start-5 col-span-4">
              <FormikControl
                control="date"
                label="Follow-Up Date"
                name="date"
              />
            </div>
            <div className="row-start-3 col-start-5 col-span-4">
              <FormikControl
                control="time"
                label="Follow-Up Time"
                name="dateTime"
              />
            </div>
            <div className="row-start-4 col-span-full place-self-center mt-auto">
              <ThemeProvider theme={theme}>
                <Stack direction="row" spacing={2}>
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<NavigateBeforeOutlined />}
                    type="button"
                    onClick={() => handlePrevStep(values)}
                  >
                    Back
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    endIcon={<NavigateNextOutlined />}
                    type="submit"
                  >
                    Next
                  </Button>
                </Stack>
              </ThemeProvider>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
};

export default Callback;