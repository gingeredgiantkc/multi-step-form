import { TextField } from '@mui/material';
import { FieldConfig, useField } from 'formik';

interface Props extends FieldConfig {
  label: string;
}

const InputField = (props: Props) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        {...field} 
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </div>
  )
}

export default InputField;