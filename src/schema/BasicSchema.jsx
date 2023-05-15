import * as Yup from "yup";

const crisIdRules = /^[0-9]{6}$/;
const btnRules = /^[0-9]{10}$/;

export const basicSchema = Yup.object().shape({
  firstName: Yup
    .string('Enter your first name')
    .min(2, 'Must contain 2 characters')
    .required('Required'),
  lastName: Yup
    .string('Enter your last name')
    .min(2, 'Must contain 2 characaters')
    .required('Required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  crisId: Yup
    .string('Enter your CRIS ID')
    .matches(crisIdRules, 'ID is 6 digits only')
    .required('CRIS ID is required'),
  csr: Yup
    .string('Enter customer name')
    .required('Customer name is required'),
  btn: Yup
    .string('Enter customer BTN')
    .matches(btnRules, 'Only numbers allowed')
    .required('BTN is required'),
  order: Yup
    .string('Select needed order type')
    .required('Order type must be selected'),
  data: Yup
    .string('Enter data changes')
    .required('Changes are required'),
  voice: Yup
    .string('Enter voice changes')
    .required('Changes are required'),
  video: Yup
    .string('Enter video changes')
    .required('Changes are required'),
});