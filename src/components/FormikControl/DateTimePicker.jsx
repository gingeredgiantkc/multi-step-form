import React from "react";
import { Field, useField } from "formik";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DatePicker from 'react-datepicker';
import { setHours, setMinutes, subDays } from "date-fns";

const DateTimePicker = (props) => {
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
            <DatePicker
              id={name} 
              {...field} 
              {...rest} 
              selected={value} 
              onChange={val => setFieldValue(name, val)}
              showTimeSelect
              inline
              minDate={subDays(new Date(), 0)}
              timeIntervals={15}
              minTime={setHours(setMinutes(new Date(), 0), 7)}
              maxTime={setHours(setMinutes(new Date(), 45), 18)}
              dateFormat="MM/dd/yyyy h:mm aa"
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

export default DateTimePicker