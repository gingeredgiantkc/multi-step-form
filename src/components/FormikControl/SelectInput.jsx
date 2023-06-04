import React from "react";
import PropTypes from "prop-types";
import { Field, useField } from "formik";
import { Form } from "react-bootstrap";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Selects = (props) => {
  const { name, options, ...rest } = props;
  const [field, meta] = useField(name);
  return (
    <Form.Select
      className={`shadow appearance-none rounded-md bg-slate-200 w-full py-2 px-3 border-2 ${meta.error && meta.touched
        ? "border-torch-red focus:border-torch-red"
        : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
      }`}
      {...field}
      {...rest}
    >
      {options.map((option) => (
        <option value={option.value}>
          {option.key}
        </option>
      ))}
    </Form.Select>
  );
};

const SelectInput = (props) => {
  const { name, label, ...rest } = props;
  const [field, meta] = useField(name);

  return (
    <React.Fragment>
      <Form.Group 
        controlId={name}
        {...rest}  
      >
        <Form.Label className="block text-gray-700 text-md font-bold pb-0.5">
          {label}
        </Form.Label>
        <Field
          name={name}
          as={Selects}
          {...field}
          {...rest}
        />
        <div className={`text-sm mb-1 ${meta && meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
          <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
        </div>
      </Form.Group>
    </React.Fragment>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default SelectInput;
