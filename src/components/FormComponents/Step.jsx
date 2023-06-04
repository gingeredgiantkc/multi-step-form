import React from 'react';
import Agent from './Agent';
import Customer from './Customer';
import Data from './Data';

function Step() {
  let stepContent;
  switch (stepNumber) {
    case 1:
      stepContent = <Agent />;
      break;
    case 2:
      stepContent = <Customer />;
      break;
    case 3:
      stepContent = <Data />;
      break;
    default:
      break;
  }
  return stepContent;
}

export default Step;