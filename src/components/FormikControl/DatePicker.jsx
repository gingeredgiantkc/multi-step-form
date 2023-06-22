import React from "react";
import { Field, useFormikContext, useField } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { TextField, FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Dates = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disablePast
        slotProps={{ textField: { variant: 'filled' } }}
        {...props}
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