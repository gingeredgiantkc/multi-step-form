import React from 'react';
import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@mui/icons-material";
import useFormContext from "../../hooks/useFormContext";

const Navigation = () => {
  const { values, stepNumber, handlePrevStep, handleNextStep } = useFormContext();
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
          type="submit"
        >
          Next
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export default Navigation;