import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import ChkSvg from "../../checkmark.svg";

const Success = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#4ed07e',
        main: '#22c55e',
        dark: '#178941',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='grid grid-cols-12 grid-rows-8 gap-2'>
        <div className="col-span-4 col-start-5 row-span-2 place-content-center">
          <img src={ChkSvg} alt="Checkmark Icon" />
          <h1 className="text-gray-700 pb-0 pt-3 font-bold text-2xl">Congratulations!</h1>
        </div>
        <div className='row-start-3 col-start-3 col-span-8'>
          <body className='text-sm text-gray-700 text-justify'>
            Your request has been submitted. You may now close this window.
          </body>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Success;