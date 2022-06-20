import { Search } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';


const SearchButton = ({onClick}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(prev => !prev);

  return (
    <Button
          variant="contained"
          disableElevation
          startIcon={<Search />}
          color={active ? 'secondary' : "transparent"}
          onClick={() => {
            onClick();
            handleClick()
          }}
        >
          Axtarış
        </Button>
  );
}

export default SearchButton;