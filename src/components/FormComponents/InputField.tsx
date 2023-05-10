import { FieldConfig, useField, Field, FormikValues } from "formik";
import { TextField } from "formik-mui";


interface Props extends FieldConfig<FormikValues> {
  label: string;
}

const InputField = ({label, ...props}: Props) => {
  const [field, meta] = useField(props);

  return (
    <Field
      component={TextField}
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  )
}

export default InputField