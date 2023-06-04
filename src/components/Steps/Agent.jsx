import React, { useContext } from "react";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { FormContext } from "../../App";

const Agent = (props) => {
  const { data, next, prev } = props;
  const { stepNumber, isLastStep } = useContext(FormContext);
  const handleSubmit = (values) => {
    console.log("data", values);
    next(values);
  };

  return (
    <Formik
      initialValues={data}
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
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="text-gray-700 py-6 font-bold text-2xl">Agent Information</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mx-4 my-2">
            <Col md={6}>
              <FormikControl
                control="input"
                name="firstName"
                label="First Name"
                type="text"
                autoFocus
              />
            </Col>
          </Row>
          <Row className="mx-4 my-2">
            <Col md={6}>
              <FormikControl
                control="input"
                name="lastName"
                label="Last Name"
                type="text"
              />
            </Col>
          </Row>
          <Row className="mx-4 my-2">
            <Col md={6}>
              <FormikControl
                control="input"
                name="email"
                label="Email"
                type="email"
              />
            </Col>
          </Row>
          <Row className="mx-4 my-2">
            <Col md={3}>
              <FormikControl
                control="input"
                name="crisId"
                label="CRIS ID"
                type="text"
              />
            </Col>
          </Row>
          <Row className="">
            <Col md={{ span: 1, offset: 4 }} className="justify-center place-content-end">
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
            <Col md={{ span: 1, offset: 1 }} className="justify-center place-content-end">
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
    </Formik>
  )
};

 export default Agent;