import React from "react";
import { Field, useField } from "formik";
import PropTypes from "prop-types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const TextField = (props) => {
  const { name, ...rest } = props
  const [field, meta] = useField(name)
  return (
    <input
      id={name}
      name={name}
      className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${meta.error && meta.touched
        ? "border-torch-red focus:border-torch-red"
        : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
      }`}
      {...field}
      {...rest}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
};

const Input = (props) => {
  const { name, label, ...rest } = props;
  const [field, meta] = useField(name);

  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="block text-gray-700 text-md font-bold pb-0.5"
      >
        {label}
      </label>
      <Field {...field} {...rest} as={TextField} />
      <div className={`text-sm mb-1 ${meta && meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;