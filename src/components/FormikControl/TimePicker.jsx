import React from "react";
import { Field, useField } from "formik";
import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Times = ({ name, onChange, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        {...props}
        name={name}
        onChange={onChange}
        slotProps={{ textField: { variant: 'filled' } }}
      />
    </LocalizationProvider>
  );
};

Times.propTypes = {
  name: PropTypes.string,
};

const TimePickers = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <FormLabel>{label}</FormLabel>
      <Field as={Times} {...field} {...props} />
      <div className={`text-sm mb-1 ${meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

TimePickers.propTypes = {
  label: PropTypes.string,
};

export default TimePickers;