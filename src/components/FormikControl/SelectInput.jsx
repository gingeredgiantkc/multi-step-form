import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <Form.Group controlId={props.id || props.name}>
        <Form.Label className="block text-gray-700 text-md font-bold pb-0.5">
          {label}
        </Form.Label>
        <Form.Select
          className={`shadow appearance-none rounded-md bg-slate-200 w-full py-2 px-3 border-2 ${meta.error && meta.touched
            ? "border-torch-red focus:border-torch-red"
            : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
          }`}
          {...field}
          {...props}
        >
          {props.options.map((option) => (
            <option value={option.value}>
              {option.key}
            </option>
          ))}
        </Form.Select>
        <div className={`text-sm mb-1 ${meta && meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
          <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
        </div>
      </Form.Group>
    </React.Fragment>
  );
};

export default SelectInput;
