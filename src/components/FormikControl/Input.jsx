import React from "react";
import { Field, useField } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const TextField = ({ label, autoFocus, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name} className="block text-gray-700 text-md font-bold pb-0.5">
        {label}
      </label>
      <input
        name={props.name}
        autoFocus={Boolean(autoFocus)}
        className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${meta.error && meta.touched
          ? "border-torch-red focus:border-torch-red"
          : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
        }`}
        {...field}
        {...props}
      />
      <div className={`text-sm mb-1 ${meta && meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

const Input = (props) => {
  return (
    <Field {...props} as={TextField} />
  );
};

export default Input;