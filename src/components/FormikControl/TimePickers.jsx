import React from "react";
import { Field, ErrorMessage, useFormikContext, useField } from "formik";
import TextField from "./TextField";
import PropTypes from "prop-types";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Times = ({ name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        {...rest}
        onChange={(val) => setFieldValue(name, val)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Times.propTypes = {
  name: PropTypes.string,
};

const TimePickers = (props) => {
  const { name, label, ...rest } = props;
  const [field] = useField(name);
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="block text-gray-700 text-md font-bold mb-1"
      >
        {label}
      </label>
      <Field as={Times} {...field} {...rest} />
      <div className={`text-sm mb-1 ${meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

TimePickers.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TimePickers;
