import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, useFormikContext } from 'formik';
import { FormContext } from './App';


const Navigation = (props) => {
  const { noPrevious, isLastStep, handleSubmit } = props;
  const { prev, next } = useContext(FormContext);
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row xs={3} className='justify-center'>
          <Col xs={{ span: 6, offset: 3}} className='justify-end'>
            <button
              disabled={noPrevious}
              type="button"
              onClick={() => prev(data)}
              className={`bg-gray-400 text-slate-500 uppercase transition duration-200 ease-in-out border-slate-300
              font-semibold border-2 py-2 px-4 rounded-xl ${noPrevious ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700 hover:text-white cursor-pointer"}`}
            >
              Back 
            </button>
            <button
              disabled={!isValid || isSubmitting || (
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
    </Form>
	)
};

export default Navigation;
//Wizard.js