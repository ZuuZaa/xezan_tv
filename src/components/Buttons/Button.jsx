import { Button as AButton } from '@mui/material';

export const ButtonColors = {
  purple: "primary",
  green: "secondary",
}

const Button = ({ onClick, type, text, startIcon, endIcon, color=ButtonColors.purple, variant='contained' }) => {
  return (
    <AButton
      variant={variant}
      color={color}
      disableElevation
      sx={{
        marginLeft: '12px'
      }}
      startIcon={startIcon}
      endIcon = {endIcon}
      onClick={onClick}
      type={type}
    >
      {text}
    </AButton>
  );
}



export default Button;