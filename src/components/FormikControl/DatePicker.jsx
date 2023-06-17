import React from "react";
import { Field, useFormikContext, useField } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { TextField, FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Dates = ({ name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (newDate) => {
    let cbDate = dayjs(newDate).toJSON().slice(0, 10);
    setFieldValue(name, cbDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...rest}
        disablePast
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Dates.propTypes = {
  name: PropTypes.string,
};

const DatePickers = (props) => {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <FormLabel>{label}</FormLabel>
      <Field as={Dates} {...field} {...rest} />
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