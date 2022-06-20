import { Breadcrumbs as MuiBreadcrumbs, MenuItem, Typography } from '@mui/material';
import { useStyles } from 'components/Breadcrumbs/BreadcrumbsStyle';
import { useLocation, useNavigate } from "react-router-dom";
import { inquiriesTranslated, settingsTranslated, notificationsTranslated } from 'constants';
import { KeyboardArrowDown } from '@mui/icons-material';
import { DropdownButton } from './Dropdown/DropdownButton';
import { breadcrumbTranslation } from 'utils/functions';


export const Breadcrumbs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(x => x)

  const translatedPathNames = breadcrumbTranslation(pathnames)

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>

      {pathname === "/" ? <Typography className={classes.text}> Əsas səhifə </Typography> :
        translatedPathNames.map((name, index) => {
          if (name === "Sorğular" || name === "Parametrlər" || name === "Elanlar") {
            return (
              <DropdownButton
                text={name}
                key={index}
                className={classes.links}
                endIcon={<KeyboardArrowDown />}
              >
                {{
                  "Sorğular": inquiriesTranslated.map(menu => (
                    <MenuItem key={menu.name} onClick={() => navigate(menu.link)}>{menu.name}</MenuItem>
                  )),
                  "Parametrlər": settingsTranslated.map(menu => (
                    <MenuItem key={menu.name} onClick={() => navigate(menu.link)}>{menu.name}</MenuItem>
                  )),
                  "Elanlar": notificationsTranslated.map(menu => (
                    <MenuItem key={menu.name} onClick={() => navigate(menu.link)}>{menu.name}</MenuItem>
                  ))
                }[name]}
              </DropdownButton>
            )
          }
          else {
            return <Typography key={index} className={classes.text}> {name} </Typography>
          }
        })}

    </MuiBreadcrumbs>
  )
};