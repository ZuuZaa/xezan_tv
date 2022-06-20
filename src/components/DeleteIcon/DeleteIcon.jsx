import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';


export function DeleteIcon({ fontSize='small', onClick, sx }) {

  return (
    <Tooltip title="Sil">
      <IconButton
        sx={sx}
        onClick={onClick}
      >
        <Delete fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};