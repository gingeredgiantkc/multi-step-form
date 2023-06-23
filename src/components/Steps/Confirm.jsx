import { List, ListItem, Button, Stack, ThemeProvider, createTheme, ListItemText } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@mui/icons-material";
import { Formik, Form } from "formik";
import React from 'react';
import useFormContext from '../../hooks/useFormContext';

const Confirm = () => {
  const {
    values,
    handleOpen,
    handlePrevStep
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
    handleOpen(values)
  };

  return (
    <Formik
      initialValues={values}
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
                    secondary={values.time}
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
            <div className="row-start-7 col-span-12 place-self-center mt-auto">
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

export default Confirm;