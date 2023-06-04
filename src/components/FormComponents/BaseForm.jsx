import React, { useState } from 'react';
import Stepper from './Stepper';
import Step from '../MultiStepForm./FormComponents/Step';
import { Col, Container, Row } from 'react-bootstrap';
import { Box, Card, CardContent } from '@mui/material';

const BaseForm = () => {
  const [stepNumber, setStepNumber] = useState(1);
  const [snapshot, setSnapshot] = useState(values);
  const steps = [
    "Agent",
    "Customer",
    "Data"
//  "Voice",
//  "Video",
//  "Review",
//  "Complete"
  ];
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

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        crisId: '',
        csr: '',
        btn: '',
        order: '',
        data: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Must contain 2 characters')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Must contain 2 characaters')
          .required('Required'),
        email: Yup.string()
          .email('Enter a valid email')
          .required('Required'),
        crisId: Yup.string()
          .matches(/^[0-9]{6}$/, '6 digits only')
          .required('Required'),
        csr: Yup.string()
          .required('Required'),
        btn: Yup.string()
          .matches(/^[0-9]{10}$/, '10 digits only')
          .required('Required'),
        order: Yup.string()
          .required('Required'),
        data: Yup.string()
          .required('Required'), 
      })}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <Card
            sx={{
              m: 0,
              mx: 'auto',
              width: {
                xs: "100%",
                md: "50%",
              },
              height: "90%",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Box paddingBottom={2}>
                <Stepper 
                  steps={steps}
                  stepNumber={stepNumber}
                />
              </Box>
              <Box paddingBottom={2}>
                <Step />
              </Box>
              <Box paddingBottom={2}>
                <Container>
                  <Row xs={3} className='justify-center'>
                    <Col xs={{ span: 6, offset: 3}} className='justify-end'>
                      <button
                        disabled={stepNumber === 1}
                        type="button"
                        onClick={() => previous(formik.values)}
                        className={`bg-gray-400 text-slate-500 uppercase transition duration-200 ease-in-out border-slate-300
                        font-semibold border-2 py-2 px-4 rounded-xl ${stepNumber === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700 hover:text-white cursor-pointer"}`}
                      >
                        Back 
                      </button>
                      <button
                        disabled={!formik.isValid || formik.isSubmitting || (
                          Object.keys(touched).length === 0 && touched.constructor === Object
                        )}
                        type="submit"
                        className="bg-green-500 text-slate-100 uppercase transition duration-200 ease-in-out border-slate-300
                        hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 py-2 px-4 rounded-xl"
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </button>
                    </Col>
                  </Row>
                </Container>
              </Box>
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default BaseForm;
