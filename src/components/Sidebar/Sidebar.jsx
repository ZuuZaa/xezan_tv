import { ReactComponent as Logo } from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useStyles } from './Styles';
import sideBarMenuItems from "./sideBarMenuItems";
import { Collapse, Box, Toolbar, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { MenuButton } from "components/Buttons";

export const Sidebar = ({ open, setOpen }) => {

  const classes = useStyles();
  const [collapse, setCollapse] = useState({});
  const collapseHandler = (item) => item.items?.length > 0 && setCollapse(old => ({ ...old, [item.key]: !old[item.key] }));
  

  return (
    <Box className={classes.sidebarContainer}>
      <Collapse orientation="horizontal" in={open} collapsedSize={70}>
        <Toolbar className={classes.logoWrapper}>
          {open ? <Logo /> : <MenuButton open={open} setOpen={setOpen} color='white' />}
        </Toolbar>
        <List>
          {sideBarMenuItems.map((item, index) => {
            return (
              <Box key={index}>
                <ListItem className={classes.navLink} onClick={() => collapseHandler(item)} button key={item.key} component={item.path && NavLink} to={item.path} >
                  <ListItemIcon className={classes.navLinkIcon} onClick={() => (!open && item.items?.length > 0) && setOpen(!open)}>{item.icon}</ListItemIcon>
                  {open && <ListItemText className={classes.navLinkText} primary={item.label} />}
                  {open && (item.items?.length > 0 && (collapse[item.key] ? <ExpandLessIcon className={classes.arrow} /> : <ExpandMoreIcon className={classes.arrow} />))}
                </ListItem>
                {
                  open && item.items?.length > 0 && (
                    <Collapse in={collapse[item.key]} key={`${item.key}-collapse`}>
                      <List key={`${item.key}-sub-list`}>
                        {
                          item.items.map(subItem => (
                            <ListItem className={classes.navLink} button key={subItem.key} component={NavLink} to={subItem.path}>
                              <ListItemIcon className={classes.navLinkIcon}>{subItem.icon}</ListItemIcon>
                              {open && <ListItemText primary={subItem.label} className={classes.navLinkText} />}
                            </ListItem>
                          ))
                        }
                      </List>
                    </Collapse>
                  )
                }
              </Box>
            )
          }
          )}
        </List>
        {console.log(collapse)}
      </Collapse>
    </Box>
  );
};