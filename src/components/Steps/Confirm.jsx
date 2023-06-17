import { List, ListItem, Button, Stack, ThemeProvider, createTheme, ListItemText, LinearProgress } from "@mui/material";
import { NavigateBeforeOutlined } from "@mui/icons-material";
import { Formik, Form } from "formik";
import React from 'react';
import useFormContext from '../../hooks/useFormContext';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const Confirm = () => {
  const {
    values,
    handlePrevStep,
    setStepNumber,
    setValues,
    setDataSwitch,
    setVoiceSwitch,
    setVideoSwitch,
  } = useFormContext();

  const handleSubmit = (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify([{
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
      }])
    };
    fetch("https://v1.nocodeapi.com/gingeredgiantkc/google_sheets/DcJmXdwHVwrQUHML/addRows?tabId=Sheet1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    setValues({
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        initialValues={values}
        //validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, submitForm, isSubmitting }) => (
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
              <div className="row-start-2 col-start-6 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Customer BTN"
                      secondary={values.btn}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-3 col-start-6 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Callback Number"
                      secondary={values.cbr}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-4 col-start-6 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Order Type"
                      secondary={values.order}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-5 col-start-6 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Data Changes"
                      secondary={values.data}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-6 col-start-6 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Voice Changes"
                      secondary={values.voice}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-2 col-start-10 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Video Changes"
                      secondary={values.video}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-3 col-start-10 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Follow-Up Date"
                      secondary={values.date}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-4 col-start-10 col-span-3 place-content-start">
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Follow-Up Time"
                      secondary={values.time}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="row-start-7 col-span-12 place-self-center">
                <ThemeProvider theme={theme}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      color="secondary"
                      variant="contained"
                      startIcon={<NavigateBeforeOutlined />}
                      disabled={isSubmitting}
                      type="button"
                      onClick={() => handlePrevStep(values)}
                    >
                      Back
                    </Button>
                    {isSubmitting && <LinearProgress />}
                    <Button
                      color="primary"
                      variant="contained"
                      disabled={isSubmitting}
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
    </LocalizationProvider>
  )
};

export default Confirm;