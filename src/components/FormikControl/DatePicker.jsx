import React from "react";
import { Field, useField } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Dates = ({ name, onChange, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        disablePast
        onChange={onChange}
        slotProps={{ textField: { variant: 'filled' } }}
      />
    </LocalizationProvider>
  );
};

Dates.propTypes = {
  name: PropTypes.string,
};

const DatePickers = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <FormLabel>{label}</FormLabel>
      <Field as={Dates} {...field} {...props} />
      <div className={`text-sm mb-1 ${meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

DatePickers.propTypes = {
  label: PropTypes.string,
};

export default DatePickers;