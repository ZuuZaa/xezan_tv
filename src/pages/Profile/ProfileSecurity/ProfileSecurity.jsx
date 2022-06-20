import { Typography, Box } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  typography: {
    fontSize: "14px",
    color: "#757575",
  },
  icon: {
    cursor: "pointer",
    color: "#424242",
  },
  boxContent: {
    border: "1px solid #E0E0E0",
    borderRadius: "4px",
    gap: 2,
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth:"200px",
  },
  box: {
    display: "flex",
    alignItems: "center",
    transform: "rotate(45deg)",
    gap: 10,
   
  },
});
export const ProfileSecurity = () => {
  const passNavigate = useNavigate();

  const passHandleClick = () => passNavigate("/profile/change-password");

  const classes = useStyles();
  return (
    <Box className={classes.boxContent}>
      <Box display="flex">
        <Box className={classes.box}>
          <KeyIcon sx={{ color: "#424242" }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "16px", color: "#424242" }}>
            Şifrəni dəyişdir
          </Typography>
          <Typography className={classes.typography}>
            Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
            etməyin yaxşı fikirdir.
          </Typography>
        </Box>
      </Box>
      <Box>
        <EditIcon className={classes.icon} onClick={passHandleClick} />
      </Box>
    </Box>
  );
};
