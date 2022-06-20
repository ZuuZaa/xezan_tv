import { Box } from '@mui/material';
import { useStyles } from '.';
import { Breadcrumbs } from 'components/Breadcrumbs';


export const SearchBar = ({ buttons = (<></>) }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.searchBar}>
        <Breadcrumbs />
        <Box textAlign="right">
          {
            buttons
          }
        </Box>
      </Box >
    </Box>
  );
}
