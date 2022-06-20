import { AttachFile } from "@mui/icons-material";
import {
  // Box,
  Input,
  // TextField
} from "@mui/material";

export const InputFile = ({ disabled = null }) => {
  return (
    <>
      <Input
        fullWidth
        disabled={disabled}
        startAdornment={<AttachFile />}
        type="file"
        sx={{
          padding: "11px 32px 11px 14px",
          border: "1px dashed rgba(0, 0, 0, 0.42)",
          borderRadius: "4px",
          "&.MuiInput-root:: before": {
            border: "none"
          },
          "&.MuiInput-root::hover": {
            border: "none"
          }
        }}
      />

      {/* 
      <TextField
      type="file"
      >
      <label htmlFor="upload-photo" />
      <input
        // style={{ display: 'none' }}
        id="upload"
        name="upload-photo"
        type="file"
      />
      </TextField> */}

      {/* <Input
      
      type="file"
      /> */}
    </>
  );
}