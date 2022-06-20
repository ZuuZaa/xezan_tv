import { Box, Typography } from '@mui/material';
import { useStyles } from './Styles';

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.pageNotFound} >
      <Typography sx={{ color: '#9B5AE1' }} variant='h1'>Page Not Found</Typography>
    </Box>
  )
};

export default NotFoundPage;