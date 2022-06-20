import { FormControl, InputLabel } from "@mui/material";
import { Field } from "formik";
import { Select } from "formik-mui";

export const CustomSelect = ({ label, children, ...props }) => {

  return (
    <FormControl fullWidth>
      <InputLabel variant="filled">
        {label}
      </InputLabel>
      <Field
        {...props}
        as={Select}
        label={label}
        InputProps={{
          ...props.InputProps,
          notched: false
        }}
      >
        {children}
      </Field>
    </FormControl>
  );
};