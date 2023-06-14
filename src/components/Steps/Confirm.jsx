import { List, ListItem, Button, Stack, ThemeProvider, createTheme, ListItemText } from "@mui/material";
import * as Yup from "yup";
import { NavigateBeforeOutlined } from "@mui/icons-material";
import { Formik, Form } from "formik";
import React, { useState } from 'react';
import useFormContext from '../../hooks/useFormContext';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const Confirm = () => {
  const {
    values,
    handleNextStep,
    handlePrevStep,
    stepNumber,
    setStepNumber,
    setValues,
    setDataSwitch,
    setVoiceSwitch,
    setVideoSwitch,
  } = useFormContext();

{/*  const handleSubmit = (values) => {
    console.log("data", values);
    axios.post("https://sheet.best/api/sheets/37992ff4-2e39-49ad-99cd-f9b343a44488", {
      First_Name: values.firstName,
      Last_Name: values.lastName,
      Email: values.email,
      Cris_ID: values.crisId,
      Csr_Name: values.csr,
      Csr_BTN: values.btn,
      Csr_CBR: values.cbr,
      Order_Type: values.order,
      Data: values.data,
      Voice: values.voice,
      Video: values.video,
      CB_Date: values.date,
      CB_Time: values.time
    });
    setValues({
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
    });
    setDataSwitch(false);
    setVoiceSwitch(false);
    setVideoSwitch(false);
    setStepNumber(1);
  }; */}

  const handleSubmit = (values) => {
    const {
      REACT_APP_SPREADSHEET_ID,
      REACT_APP_SHEET_ID,
      REACT_APP_PRIVATE_KEY,
      REACT_APP_CLIENT_EMAIL
    } = process.env;
    const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);
    const data = {
      First_Name: values.firstName,
      Last_Name: values.lastName,
      Email: values.email,
      Cris_ID: values.crisId,
      Csr_Name: values.csr,
      Csr_BTN: values.btn,
      Csr_CBR: values.cbr,
      Order_Type: values.order,
      Data: values.data,
      Voice: values.voice,
      Video: values.video,
      CB_Date: values.date,
      CB_Time: values.time,
    };
    const appendSpreadsheet = async(row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: REACT_APP_CLIENT_EMAIL,
          private_key: REACT_APP_PRIVATE_KEY,
        });
        await doc.loadInfo();
        console.log(doc.loadInfo());
        const sheet = doc.sheetsById[REACT_APP_SHEET_ID];
        const result = await sheet.addRow(row);
        return result;
      } catch (e) {
        console.error("Error: ", e);
      }
    };
    appendSpreadsheet(data);
    setValues({
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
    });
    setDataSwitch(false);
    setVoiceSwitch(false);
    setVideoSwitch(false);
    setStepNumber(1);
  };
 
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


  return (
    <Formik
      initialValues={values}
      //validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-8 gap-2">
            <div className="col-span-4 col-start-5 text-center">
              <h1 className="text-gray-700 pb-0 pt-3 font-bold text-2xl">Review</h1>
            </div>
            <div className="row-start-2 col-start-2 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Agent First Name"
                    secondary={values.firstName}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-3 col-start-2 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Agent Last Name"
                    secondary={values.lastName}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-4 col-start-2 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Agent Email"
                    secondary={values.email}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-5 col-start-2 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Agent CRIS ID"
                    secondary={values.crisId}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-6 col-start-2 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Customer Name"
                    secondary={values.csr}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-7 col-start-2 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Customer BTN"
                    secondary={values.btn}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-2 col-start-6 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Customer Contact Number"
                    secondary={values.cbr}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-3 col-start-6 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Order Type"
                    secondary={values.order}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-4 col-start-6 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Data Changes"
                    secondary={values.data}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-5 col-start-6 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Voice Changes"
                    secondary={values.voice}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-6 col-start-6 col-span-3 place-content-start">
              <List>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Video Changes"
                    secondary={values.video}
                  />
                </ListItem>
              </List>
            </div>
            <div className="row-start-8 col-span-12 place-self-center">
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
                    Submit
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

export default Confirm;