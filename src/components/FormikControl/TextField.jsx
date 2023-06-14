import { useField } from "formik";
import React from "react";

const TextField = ({
  type,
  label,
  name,
  autoFocus,
  ...props
}) => {
  const [field, meta] = useField(name)
  return (
    <React.Fragment>
      <input
        id={name}
        name={name}
        type={type}
        autoFocus={Boolean(autoFocus)}
        className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${meta.error && meta.touched
          ? "border-torch-red focus:border-torch-red"
          : "border-b-gray-400 border-gray-100 hover:border-b-gray-600 focus:border-b-gray-600 focus-within:border-b-gray-600"
        }`}
        {...field}
        {...props}
      />
    </React.Fragment>
  );
};

export default TextField;
