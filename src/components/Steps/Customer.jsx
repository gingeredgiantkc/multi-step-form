import React, { useContext } from "react";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import { FormContext } from "../../App";
import { Box } from "@mui/material";

const Customer = (props) => {
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
        csr: Yup.string()
          .required('Required'),
        btn: Yup.string()
          .matches(/^[0-9]{10}$/, '10 digits only')
          .required('Required'),
        cbr: Yup.string()
          .matches(/^[0-9]{10}$/, '10 digits only')
          .required('Required'),
        order: Yup.string()
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <Form>
          <Container>
            <Row>
              <Col className="text-center">
                <h1 className="text-gray-700 py-6 font-bold text-2xl">Customer Information</h1>
              </Col>
            </Row>
            <Row className="ml-4 mr-0 mb-2">
              <Col md={6}>
                <FormikControl
                  control="input"
                  name="csr"
                  label="Customer Name"
                  type="text"
                  autoFocus
                />
              </Col>
            </Row>
            <Row className="ml-4 mr-0 mb-2">
              <Col md={3}>
                <FormikControl
                  control="input"
                  name="btn"
                  label="Customer BTN"
                  type="text"
                />
              </Col>
              <Col md={3}>
                <FormikControl
                  control="input"
                  name="cbr"
                  label="Customer CBR"
                  type="text"
                />
              </Col>            
            </Row>
            <Row className="ml-4 mr-0 mb-2">
              <Col md={6}>
                <FormikControl
                  control="select"
                  name="order"
                  label="Order Type"
                  options={[
                    { key: "", value: "" },
                    { key: "RI - Residential Install", value: "RI" },
                    { key: "RC - Physical Change", value: "RC" },
                    { key: "RO - Permanent Disconnect", value: "RO" },
                    { key: "PI - Port-in/Winback", value: "PI" },
                    { key: "CC - Switch Change", value: "CC" },
                    { key: "CD - Records Only", value: "CD" },
                  ]}
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

export default Customer;