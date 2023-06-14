import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, Switch, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Video = () => {
  const {
    values,
    videoSwitch,
    setVideoSwitch,
    handleNextStep,
    handlePrevStep,
    stepNumber,
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

  const handleToggle = () => {
    setVideoSwitch(!videoSwitch);
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={Yup.object().shape({
        video: videoSwitch ? Yup.string() : Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-6 gap-2">
            <div className="col-span-4 col-start-5 text-center">
              <h1 className="text-gray-700 py-6 font-bold text-2xl">Order Change</h1>
            </div>        
            <div className="col-span-5 col-start-2 row-span-2">
                <FormikControl
                  control="textarea"
                  label="Video Service"
                  name="video"
                  disabled={videoSwitch}
                  placeholder="Enter service and equipment changes here."
                />
            </div>
            <div className="row-start-4 col-start-2 col-span-5 place-self-end">
              <span className="text-xs text-gray-700">
                No Video/No changes made to Video service
              </span>
              <Switch
                checked={videoSwitch}
                onChange={handleToggle}
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

export default Video;