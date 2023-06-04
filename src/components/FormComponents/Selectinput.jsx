import PropTypes from "prop-types";
import { Field, useField } from "formik";
import { FormLabel, Select, MenuItem, Grid } from "@mui/material";

const Selects = (props) => {
  const { name, options, ...rest } = props;
  return (
    <Select name={name} displayEmpty {...rest}>
      {options.map((option) => (
        <MenuItem key={option.key} value={option.value}>
          {option.key}
        </MenuItem>
      ))}
    </Select>
  );
};
const SelectInput = (props) => {
  const { name, label, options, ...rest } = props;
  const [field] = useField(name);

  return (
    <Grid container direction="column" gap={2}>
      <FormLabel>{label}</FormLabel>
      <Field
        type="select"
        name={name}
        as={Selects}
        displayEmpty={true}
        options={options}
        {...field}
        {...rest}
      />
    </Grid>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default SelectInput;
