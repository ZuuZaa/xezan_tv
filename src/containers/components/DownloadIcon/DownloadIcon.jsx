import { IconButton, Tooltip } from '@mui/material';
import { Download } from '@mui/icons-material';


export function DownloadIcon({ fontSize, onClick }) {

  return (
    <Tooltip title="Endir">
      <IconButton
        sx={{
          padding: "0"
        }}
        onClick={onClick}
      >
        <Download fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};