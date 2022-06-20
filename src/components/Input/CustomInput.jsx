import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Field } from "formik";

export const CustomInput = ({ label, ...props }) => {

  return (
    <FormControl fullWidth>
      <InputLabel variant="filled">
        {label}
      </InputLabel>
      <Field
        as={OutlinedInput}
        {...props}
      />
    </FormControl>
  );
};