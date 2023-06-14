import React from "react";
import FtrSvg from "/frontier.svg";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Agent = () => {
  const {
    values,
    handleNextStep,
    handlePrevStep,
    stepNumber,
   } = useFormContext();

 const handleSubmit = (values) => {
    console.log("data", values);
    handleNextStep(values);
  };
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
  return (
    <Formik
      initialValues={values}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Must contain 2 characters')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Must contain 2 characaters')
          .required('Required'),
        email: Yup.string()
          .email('Enter a valid email')
          .required('Required'),
        crisId: Yup.string()
          .matches(/^[0-9]{6}$/, '6 digits only')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values, isValid}) => (
      <Form>
        <div className="grid grid-cols-12 grid-rows-6 gap-2">
          <div className="col-span-4 col-start-5 text-center">
            <h1 className="text-gray-700 pt-3 pb-0 font-bold text-2xl">Agent Information</h1>
          </div>
          <div className="col-span-5 col-start-2">
            <FormikControl
              control="input"
              name="firstName"
              label="First Name"
              type="text"
              autoFocus
            />
          </div>         
          <div className="row-start-3 col-start-2 col-span-5">
            <FormikControl
              control="input"
              name="lastName"
              label="Last Name"
              type="text"
            />
          </div>
          <div className="col-start-8 col-span-4 row-span-3">
            <img src={FtrSvg} alt="Frontier Icon" />
          </div>
          <div className="row-start-4 col-start-2 col-span-5">
            <FormikControl
              control="input"
              name="email"
              label="Email"
              type="email"
            />
          </div>
          <div className="row-start-5 col-start-2 col-span-2">
            <FormikControl
              control="input"
              name="crisId"
              label="CRIS ID"
              type="text"
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
                  endIcon={<NavigateNextOutlined />}
                  type="button"
                  onClick={() => handleNextStep(values)}
                  disabled={!isValid}
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

 export default Agent;