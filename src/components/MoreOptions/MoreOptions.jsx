import { IconButton, Menu, Tooltip } from '@mui/material';
import { useState } from 'react';
import { MoreHoriz } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export const MoreOptions = ({ tooltip="Daha çox", children, userId}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => {
    navigate(`${userId}`)
    setAnchorEl(e.currentTarget)
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Tooltip title={tooltip}>
        <IconButton onClick={handleClick}>
          <MoreHoriz />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children}
      </Menu>
    </div>
  );
};