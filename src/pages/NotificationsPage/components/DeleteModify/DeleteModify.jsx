import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";

export const DeleteModify = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(TOGGLES_ACTIONS.setDeleteNotify());

  return (
    <Tooltip title="Sil">
      <IconButton onClick={handleClick}>
        <Delete fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};
