import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const TextArea = ({ label, autoFocus, name, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="block text-gray-700 text-base font-bold pb-0.5"
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        name={name}
        autoFocus={Boolean(autoFocus)}
        className={`shadow appearance-none resize-none w-full h-full rounded-md bg-slate-200 py-2 px-3 border-2 ${meta.error && meta.touched
          ? "border-torch-red focus:border-torch-red"
          : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
        }`}
      />
      <div className={`text-sm mb-1 ${meta && meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TextArea;