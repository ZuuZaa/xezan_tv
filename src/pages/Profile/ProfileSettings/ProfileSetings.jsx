import { CardContent, Typography, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { makeStyles } from "@mui/styles";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    cursor: "pointer",
    "&:hover": {
      background: "#F3EBFB",
      borderRadius: "4px",
    },
  },
  box: {
    height: "100%",
    width: "300px",
    borderRight: "1px solid gray",
    padding: "16px",
  },
  typography: {
    color: "#424242",
    fontSize: "14px",
    '@media (max-width: 900px)' : {
      display:"flex",
    },
    "&:hover": {
      color: "#9B5AE1",
    },
    
  },
});

export const ProfileSettings = () => {
  const classes = useStyles();

  const userNavigate = useNavigate();
  const securityNavigate = useNavigate();

  const userHandleClick = () => userNavigate("/profile/settings");

  const securityHandleClick = () => securityNavigate("/profile/security");

  return (
    <Box className={classes.box}>
      <CardContent onClick={userHandleClick} className={classes.content}>
        <Box sx={{display:"flex",alignItems:"center"}}>
      <SettingsIcon className={classes.icon} />
        <Typography className={classes.typography}>
          Hesab parametrləri
        </Typography>
        </Box>
      </CardContent>
      <CardContent onClick={securityHandleClick} className={classes.content}>
        <Box sx={{display:"flex",alignItems:"center"}}>
      <SecurityIcon className={classes.icon} />
        <Typography className={classes.typography}>
          Təhlükəsizlik və Giriş
        </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};
