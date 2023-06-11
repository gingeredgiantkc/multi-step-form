import { List, ListItem, Button, Stack, ThemeProvider, createTheme, ListItemText } from '@mui/material';
import { NavigateBeforeOutlined } from "@mui/icons-material";
import { Formik, Form } from "formik";
import React, { useContext } from 'react';
import { FormContext } from "../../App";

const Confirm = (props) => {
  const { values, prev, next } = props;
  const { firstName, lastName, email, crisId, csr, btn, cbr, order, data, voice, video } = values;
  const { stepNumber } = useContext(FormContext);
  const handleSubmit = (values) => {
    console.log("data", values);
    next(values);
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
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <div className="grid grid-cols-12 grid-rows-6 gap-2">
            <div className="col-span-4 col-start-5 text-center">
              <h1 className="text-gray-700 pb-0 pt-3 font-bold text-2xl">Review</h1>
            </div>
            <div className="row-start-2 col-span-12 place-content-center">
              <List>
                <ListItem>
                  <ListItemText
                    primary="Agent First Name"
                    secondary={firstName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Agent Last Name"
                    secondary={lastName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Agent Email"
                    secondary={email}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Agent CRIS ID"
                    secondary={crisId}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Customer Name"
                    secondary={csr}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Customer BTN"
                    secondary={btn}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Customer Contact Number"
                    secondary={cbr}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Order Type"
                    secondary={order}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Data Changes"
                    secondary={data}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Voice Changes"
                    secondary={voice}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Video Changes"
                    secondary={video}
                  />
                </ListItem>
              </List>
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
                    onClick={() => prev(values)}
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