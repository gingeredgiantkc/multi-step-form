import React, { useContext } from 'react';
import * as Yup from "yup";
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import FormikControl from '../FormikControl/FormikControl';
import { FormContext } from '../../App';

const Video = (props) => {
  const { next, prev, data } = props;
  const { stepNumber, isLastStep } = useContext(FormContext);

  const handleSubmit = (values) => {
    console.log("data", values);
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={Yup.object().shape({
        video: Yup.string()
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <Container>
            <Row>
              <Col className="text-center">
                <h1 className="text-gray-700 pb-8 font-bold text-2xl">Order Change</h1>
              </Col>
            </Row>
            <Row className="ml-4 mr-0 mb-2">
              <Col md={6}>
                <FormikControl
                  control="textarea"
                  label="Video Service"
                  name="video"
                  placeholder="Enter service and equipment changes here."
                />
              </Col>
            </Row>
            <Row className="mt-6 -mb-8 items-end">
              <Col md={{ span: 1, offset: 4 }} className="justify-center">
                <button
                  disabled={stepNumber <= 1}
                  type="button"
                  onClick={() => prev(values)}
                  className={`bg-gray-400 text-slate-100 uppercase transition duration-200 ease-in-out border-slate-300
                  font-semibold border-2 py-2 px-4 rounded-xl ${stepNumber <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700 hover:text-white cursor-pointer"}`}
                >
                  Back 
                </button>
              </Col>
              <Col md={{ span: 1, offset: 1 }} className="justify-center">
                <button
                  type="submit"
                  className="bg-green-500 text-slate-100 uppercase transition duration-200 ease-in-out border-slate-300
                  hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 py-2 px-4 rounded-xl"
                >
                  {isLastStep ? "Done" : "Next"}
                </button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
};

export default Video;