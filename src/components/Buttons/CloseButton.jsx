import { Button } from '@mui/material';

export const CloseButton = ({ text = "Bağla", onClick, type }) => {
  return (
    <Button
      type={type}
      variant='contained'
      color='secondary'
      disableElevation
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
