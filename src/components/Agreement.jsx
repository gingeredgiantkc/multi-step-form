import React from 'react'
import { Backdrop, Box, Button, createTheme, Fade, Modal, ThemeProvider } from '@mui/material';
import useFormContext from '../hooks/useFormContext'
import { Form, Formik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid grey.300',
  boxshadow: 36,
  p: 4,
};

export default function Agreement() {
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

  const {
    open,
    values,
    handleClose,
    handleNextStep
  } = useFormContext();
  
  const handleSubmit = (values) => {
    console.log("data", values);
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
    handleNextStep(values);
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form onSubmit={handleSubmit}>
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <div className='grid grid-cols-6 grid-rows-3 gap-2'>
                  <div className='col-span-6 place-content-center'>
                    <h1 className='text-2xl font-bold text-gray-700 text-center'>
                      Agree & Submit
                    </h1>
                  </div>
                  <div className='row-start-2 col-start-2 col-span-4 justify-around'>
                    <body className='text-sm font-normal text-gray-700'>
                      By clicking 'Submit,' I, the Agent, acknowledge and agree that the changes specified in this request have been made available to me in my normal systems, and due to a system-returned error not of my own doing, I have exhausted all other resources to create this order successfully. Upon receiving verbal or written notification of the order's creation, I shall complete said order by entering its work schedule and staging it accordingly. I also understand and agree that I, and I alone, am responsible for the creation of this order as well as completing the follow-up with the customer by its scheduled time.
                    </body>
                  </div>
                  <div className='row-start-3 col-span-6 place-content-center mx-2'>
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
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Stack>
                    </ThemeProvider>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        </Form>
      )};
    </Formik>
  );
};
