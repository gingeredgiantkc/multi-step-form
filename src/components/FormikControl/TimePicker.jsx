import React from "react";
import { Field, useField } from "formik";
import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import dayjs from "dayjs";

const Times = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        minTime={dayjs().set('hour', 7).startOf('hour')}
        maxTime={dayjs().set('hour', 19).startOf('hour')}
        slotProps={{ textField: { variant: 'filled' } }}
        {...props}
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