import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, Switch, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Order = () => {
  const {
    values,
    data,
    voice,
    video,
    handleNextStep,
    handlePrevStep,
    handleNewData,
    handleNewVoice,
    handleNewVideo
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
        data: data ? Yup.string().required('Required') : Yup.string(),
        voice: voice ? Yup.string().required('Required') : Yup.string(),
        video: video ? Yup.string().required('Required') : Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-6 gap-0">
            <div className="col-span-full text-center my-auto">
              <h1 className="text-gray-700 py-6 font-bold text-2xl">Order Change</h1>
            </div>
            <div className="row-start-2 col-start-2 col-span-2 text-center my-auto">
              <span className="text-xs text-gray-700">
                Make Changes?
              </span>
              <Switch
                checked={data}
                onChange={handleNewData}
              />
            </div>
            <div className="col-span-6 col-start-4">
              <FormikControl
                control="input"
                label="Data"
                name="data"
                disabled={!data}
                placeholder="Enter service and equipment changes here."
              />
            </div>
            <div className="row-start-3 col-start-2 col-span-2 text-center my-auto">
              <span className="text-xs text-gray-700">
                Make Changes?
              </span>
              <Switch
                checked={voice}
                onChange={handleNewVoice}
              />
            </div>
            <div className="col-span-6 col-start-4">
              <FormikControl
                control="input"
                label="Voice"
                name="voice"
                disabled={!voice}
                placeholder="Enter service and equipment changes here."
              />
            </div>
            <div className="row-start-4 col-start-2 col-span-2 text-center my-auto">
              <span className="text-xs text-gray-700">
                Make Changes?
              </span>
              <Switch
                checked={video}
                onChange={handleNewVideo}
              />
            </div>
            <div className="col-span-6 col-start-4">
              <FormikControl
                control="input"
                label="Video"
                name="video"
                disabled={!video}
                placeholder="Enter service and equipment changes here."
              />
            </div>
            <div className="row-start-6 col-span-full place-self-center mt-auto">
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

export default Order;