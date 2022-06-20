import { IconButton, Tooltip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';


export function InfoIcon({ fontSize, onClick }) {

  return (
    <Tooltip title="Məlumat">
      <IconButton
        sx={{
          padding: "0"
        }}
        onClick={onClick}
      >
        <InfoOutlined fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};