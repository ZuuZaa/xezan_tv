import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: "12px 16px",
    borderBottom: "1px solid #E0E0E0"
  },
  header: {
    fontSize: "18px",
    fontWeight: "500",
    color: "rgba(66, 66, 66, 1)"
  },
  iconsBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  }
})

export const FormHead = ({ header, actions = <></> }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.header}>
        {header}
      </Typography>
      <Box className={classes.iconsBox}>
        {actions}
      </Box>
    </Box>
  );
}