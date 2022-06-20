import { IconButton, Tooltip } from '@mui/material';
import { Edit } from '@mui/icons-material';


export function EditIcon({ fontSize, onClick }) {

  return (
    <Tooltip title="Redaktə et">
      <IconButton
        sx={{
          padding: "0"
        }}
        onClick={onClick}
      >
        <Edit fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};