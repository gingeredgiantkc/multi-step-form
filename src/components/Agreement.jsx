import React from 'react'
import { Backdrop, Box, Button, createTheme, Fade, Modal, Stack, ThemeProvider } from '@mui/material';
import { NavigateBeforeOutlined } from "@mui/icons-material";
import useFormContext from '../hooks/useFormContext';

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
    handleNextStep(values);
    handleClose(values);

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
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(values)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            maxHeight: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid grey.300',
            boxshadow: 36,
            pt: 4,
            px: 4,
            pb: 2,
          }}
        >
          <div className='text-2xl font-bold text-gray-700 text-center pb-4'>
            Agree & Submit
          </div>
          <div className='text-justify text-sm font-normal text-gray-700'>
            By clicking Submit, I, the Agent, acknowledge and agree that the 
            changes specified in this request have been made available to me in 
            my normal systems, and due to a system-returned error not of my own doing, 
            I have exhausted all other resources to create this order successfully. 
            Upon receiving verbal or written notification of the order's creation, 
            I shall complete said order by entering its work schedule and staging it accordingly. 
            I also understand and agree that I, and I alone, am responsible for the 
            creation of this order as well as completing the follow-up with the customer 
            by its scheduled time.
          </div>
          <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={2}>
              <div className='grid grid-cols-12 grid-row-1 gap-2'>
                <div className='row-start-1 col-span-full place-self-center mt-auto'>
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<NavigateBeforeOutlined />}
                    type="button"
                    onClick={() => handleClose(values)}
                  >
                    Back
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleSubmit(values)}
                    type="button"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Stack>
          </ThemeProvider>
        </Box>
      </Fade>
    </Modal>
  );
};
