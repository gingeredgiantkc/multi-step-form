import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Callback = () => {
  const {
    values,
    handleNextStep,
    handlePrevStep,
    stepNumber,
   } = useFormContext();

  const theme = createTheme({
    palette: {
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
        date: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-6 gap-2">
            <div className="col-span-8 col-start-3 text-center">
              <h1 className="text-gray-700 pt-3 pb-0 font-bold text-2xl">Scheduled Follow-Up</h1>
            </div>        
            <div className="row-start-2 col-span-5 col-start-2">
                <FormikControl
                  control="date"
                  name="date"
                />
            </div>
            <div className="row-start-6 col-span-12 place-self-center">
              <ThemeProvider theme={theme}>
                <Stack direction="row" spacing={2}>
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<NavigateBeforeOutlined />}
                    disabled={stepNumber <= 1}
                    type="button"
                    onClick={() => handlePrevStep(values)}
                  >
                    Back
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Confirm
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