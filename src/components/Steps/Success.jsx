import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

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
      <div className='grid grid-cols-12 grid-rows-6 gap-2'>
        <div className="row-start-2 col-span-4 col-start-5 row-span-2 text-center">
          <h1 className="text-gray-700 pb-0 pt-3 font-bold text-2xl">Congratulations!</h1>
        </div>
        <div className='row-start-4 col-span-full text-center text-sm font-semibold text-gray-700'>
          Your request has been submitted.
          <br />
          You may now close this window.
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Success;