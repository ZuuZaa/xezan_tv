import { Button } from '@mui/material';

const SubmitButton = ({ text = 'Yadda saxla', onClick }) => {
  return (
    <Button
      type="submit"
      variant='contained'
      color='formSubmit'
      disableElevation
      sx={{
        color: '#fff',
        marginLeft: '12px'
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default SubmitButton;