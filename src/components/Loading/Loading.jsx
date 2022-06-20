import { useStyles } from './Styles';
import { Box, CircularProgress } from '@mui/material';

export const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loading}>
      <CircularProgress className={classes.circularProgress} />
    </Box>
  );
};