import React, { useState} from 'react';
import { Form, Formik } from 'formik';
import Navigation from './Navigation';
import Agent from './Agent';
import Customer from './Customer';
import Data from './Data';

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(1);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps;

  const next = values => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, helpers) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, helpers);
    }
    if (isLastStep) {
      return onSubmit(values, helpers);
    } else {
      helpers.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          {displayStep(stepNumber)}
          <Navigation
            isLastStep={isLastStep}
            hasPrevious={stepNumber > 1}
            onBackClick={() => previous(formik.values)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;

export const FormStep = ({stepName = '', children }) => children;