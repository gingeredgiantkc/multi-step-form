import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Customer = () => {
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
        csr: Yup.string()
          .required('Required'),
        btn: Yup.string()
          .matches(/^[0-9]{10}$/, '10 digits only')
          .required('Required'),
        cbr: Yup.string()
          .matches(/^[0-9]{10}$/, '10 digits only')
          .required('Required'),
        order: Yup.string()
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values, isValid}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-6 gap-0">
            <div className="col-span-8 col-start-3 text-center">
              <h1 className="text-gray-700 pt-4 pb-0 font-bold text-2xl">Customer Information</h1>
            </div>
            <div className="row-start-2 col-span-5 col-start-2">
              <FormikControl
                control="input"
                name="csr"
                label="Customer Name"
                type="text"
                autoFocus
              />
            </div>
            <div className="row-start-3 col-span-3 col-start-2">
              <FormikControl
                control="input"
                name="btn"
                label="Customer BTN"
                type="text"
              />
            </div>
            <div className="row-start-4 col-span-3 col-start-2">
              <FormikControl
                control="input"
                name="cbr"
                label="Customer CBR"
                type="text"
              />
            </div>
            <div className="row-start-5 col-span-4 col-start-2">
              <FormikControl
                control="select"
                name="order"
                label="Order Type"
                options={[
                  { key: "", value: "" },
                  { key: "RI - Residential Install", value: "RI" },
                  { key: "RC - Physical Change", value: "RC" },
                  { key: "RO - Permanent Disconnect", value: "RO" },
                  { key: "PI - Port-in/Winback", value: "PI" },
                  { key: "CC - Switch Change", value: "CC" },
                  { key: "CD - Records Only", value: "CD" },
                ]}
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

export default Customer;