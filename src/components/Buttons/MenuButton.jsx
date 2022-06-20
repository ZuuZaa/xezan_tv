import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from './Styles';

export const MenuButton = ({ open, setOpen, color }) => {

  const classes = useStyles();

  return (
    <IconButton
      onClick={() => setOpen(!open)}
      size="large"
      edge="start"
      color={color}
      aria-label="menu"
      className={classes.iconButton}
    >
      <MenuIcon />
    </IconButton>
  )
}