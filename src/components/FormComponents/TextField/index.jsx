import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useField, useFormikContext } from "formik";

const TextFieldWrapper = ({
  name,
  label,
  ...otherProps
}) => {

  const { handleChange } = useFormikContext(name);
  const [field, meta] = useField(name)

  const configTextField = {
    ...field,
    ...otherProps,
    onChange: {handleChange}
  }


  return (
    <>
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input {...configTextField} />
      { 
        meta && meta.error && meta.touched
        ? <span className="text-[12px] text-torch-red">
            <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
          </span>
        : <span />
      }
    </>
  )
}

export default TextFieldWrapper;
