import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export const ButtonColors = {
  purple: "primary",
  green: "secondary",
};

const AddButton = ({
  onClick,
  text = "Əlavə et",
  startIcon = <Add />,
  endIcon,
  color = ButtonColors.purple,
  variant = "contained",
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      disableElevation
      sx={{
        marginLeft: "12px",
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default AddButton;
