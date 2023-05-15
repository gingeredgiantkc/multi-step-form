import { useField } from 'formik';

export default function InputField(props) {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        {...field} 
        {...props} 
        onChange={meta.handleChange}
        onBlur={meta.handleBlur}
        value={meta.value}
      />
      {meta.error && meta.touched ? <div>{meta.error}</div> : <div />}
    </div>
  )
}