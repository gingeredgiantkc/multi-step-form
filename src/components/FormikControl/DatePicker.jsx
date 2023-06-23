import React from "react";
import { Field } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DateView from 'react-datepicker';
import { subDays } from "date-fns";

const DatePicker = (props) => {
  const { label, name, ...rest } = props
  const [meta] = useField(name)
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="block text-gray-700 text-md font-bold pb-0.5"
      >
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name} 
              {...field} 
              {...rest} 
              selected={value} 
              onChange={val => setFieldValue(name, val)}
              inline
              minDate={subDays(new Date(), 0)}
              dateFormat="MM/dd/yyyy"
            />
          )
        }}
      </Field>
      <div className={`text-sm mb-1 ${meta && meta.touched && meta.error ? "text-torch-red" : "opacity-0"}`}>
        <ErrorOutlineIcon fontSize="small" color="error" /> {meta.error}
      </div>
    </React.Fragment>
  )
}

export default DatePicker