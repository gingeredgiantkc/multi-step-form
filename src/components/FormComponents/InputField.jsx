import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useField, useFormikContext } from "formik";

const TextInput = ({
  name,
  label,
  ...otherProps
}) => {

  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configInputField = {
    ...field,
    ...otherProps,
    onChange: handleChange
  }

  return (
    <>
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input {...configInputField} />
      { 
        meta && meta.error && meta.touched
        ? <div className="text-[12px] text-torch-red">
            <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
          </div>
        : <div className="text-[12px]">
            { }
          </div>
      }
    </>
  )
}

export default TextInput;