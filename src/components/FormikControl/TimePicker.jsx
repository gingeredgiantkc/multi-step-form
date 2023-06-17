import React from "react";
import { Field, useFormikContext, useField } from "formik";
import { TextField, FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import dayjs from "dayjs";

const Times = ({ name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (newTime) => {
    let cbTime = dayjs(newTime).toJSON().slice(11, -5);
    setFieldValue(name, cbTime);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        {...rest}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Times.propTypes = {
  name: PropTypes.string,
};

const TimePickers = (props) => {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <FormLabel>{label}</FormLabel>
      <Field as={Times} {...field} {...rest} />
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