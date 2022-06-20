import { IconButton, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useDispatch } from 'react-redux';
// import { TOGGLES_ACTIONS } from 'store/Toggles';
import { useState } from 'react';


export function ShowHide({ fontSize = 'small', userId }) {
  // const dispatch = useDispatch();
  const [active, setActive] = useState(false)


  const handleClick = () => {
    // dispatch(TOGGLES_ACTIONS.setEditDialog());
    setActive(prev => !prev);
  };

  return (
    <div>
      <Tooltip title={active ? "Göstər" : "Gizlət" }>
        <IconButton
          onClick={handleClick}
        >
          {
            active ?
              <VisibilityOff fontSize={fontSize} /> :
              <Visibility fontSize={fontSize} />
          }
        </IconButton>
      </Tooltip>
    </div>
  );
}