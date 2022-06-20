import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, MenuItem, } from "@mui/material";
import { useStyles } from './Styles';
import { useNavigate } from "react-router-dom";
import { ProfileOptions } from "pages/Profile/ProfileOptions";
import { MenuButton } from "components/Buttons";

export const Navbar = ({open, setOpen}) => {

  const navigate = useNavigate();
  const classes = useStyles();
  const mediaQuery = window.matchMedia('(min-width: 800px)');
  const [userName, setUserName] = useState(mediaQuery.matches || false);
  mediaQuery.addEventListener('change', e => setUserName(e.matches));

  return (
    <Box className={classes.navBar}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box>
            {open && <MenuButton open={open} setOpen={setOpen} color='black' />}
          </Box>
          <Box className={classes.profileContainer}>
            <Box>
              <ProfileOptions>
                <MenuItem onClick={() => navigate("/profile/settings")}>
                  Profil
                </MenuItem>
                <MenuItem onClick={() => navigate("/login")}>Çıxış</MenuItem>
              </ProfileOptions>
            </Box>
            {userName && <Typography component="div" className={classes.userName}>Aydin Abbasov</Typography>}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}