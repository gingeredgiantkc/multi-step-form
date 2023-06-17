import React from "react";
import PropTypes from "prop-types";
import { useField, Field } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateTimePickers = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label
        htmlFor={props.id || props.name}
        className="block text-gray-700 text-md font-bold mb-1"
      >
        {label}
      </label>
      <Field 
        as={DateTimePicker}
        name={props.name}
        textField={{ helperText: 'Select date/time of Customer Follow-Up' }}
        {...field}
        {...props}
      /> 
      <div className={`text-sm mb-1 ${meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </LocalizationProvider>
  );
};

DateTimePickers.propTypes = {
  label: PropTypes.string,
};

export default DateTimePickers;