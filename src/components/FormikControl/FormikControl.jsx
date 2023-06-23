import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import TextField from "./TextField";
import PropTypes from "prop-types";
import DatePickers from "./DatePicker";
import FormRadio from "./FormRadio";
import FormCheckBox from "./FormCheckBox";
import DateTimePicker from "./DateTimePicker";
import TimePickers from "./TimePicker";

const FormikControl = ({ control, ...props }) => {
  switch (control) {
    case "input":
      return <TextField {...props} />;
    case "textarea":
      return <TextArea {...props} />;
    case "select":
      return <SelectInput {...props} />;
    case "radio":
      return <FormRadio {...props} />;
    case "dateTime":
      return <DateTimePicker {...props} />;
    case "date":
      return <DatePickers {...props} />;
    case "checkbox":
      return <FormCheckBox {...props} />;
      case "time":
        return <TimePickers {...props} />;  
    default:
      return null;
  }
};
FormikControl.propTypes = {
  control: PropTypes.string,
};
export default FormikControl;
