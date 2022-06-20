import { TextField } from "@mui/material";


export const InputAutocomplete = ({ ...props }) => {

  return (
    <TextField
      {...props}
      variant="outlined"
      InputLabelProps={{
        ...props.InputLabelProps,
        variant: "filled"
      }}
      InputProps={{
        ...props.InputProps,
        notched: false
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "18px 6px 0px",
        },
      }}
    />
  );
}
