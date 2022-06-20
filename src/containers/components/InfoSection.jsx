import { InfoRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  outerBox: {
    display: 'flex',
    padding: "12px 16px",
    gap: 8,
  },
  icon: {
    color: "rgba(66, 66, 66, 1)"
  },
  header: {
    fontWeight: "700",
    color: "rgba(66, 66, 66, 1)"
  },
  text: {
    fontSize: "16px",
    fontWeight: "400",
  }
});

export const InfoSection = ({ name }) => {
  const classes = useStyles();

  return (
    <Box className={classes.outerBox}>
      <InfoRounded
        className={classes.icon}
      />
      <Typography className={classes.header}>
        Sorğunu yaradan şəxs:
      </Typography>
      <Typography className={classes.text}>
        {name}
      </Typography>
    </Box>
  );
};