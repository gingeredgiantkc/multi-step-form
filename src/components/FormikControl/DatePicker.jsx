import React from "react";
import { Field, useFormikContext, useField } from "formik";
import TextField from "./TextField";
import PropTypes from "prop-types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Dates = ({ name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...rest}
        onChange={(val) => setFieldValue(name, val)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Dates.propTypes = {
  name: PropTypes.string,
};

const DatePickers = (props) => {
  const { name, label, ...rest } = props;
  const [field, meta] = useField(name);
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="block text-gray-700 text-md font-bold mb-1"
      >
        {label}
      </label>
      <Field
        name={name}
        as={Dates}
        {...field}
        {...rest}
      />
      <div className={`text-sm mb-1 ${meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  );
};

DatePickers.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default DatePickers;