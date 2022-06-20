import {Typography } from "@mui/material";
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
} from "@mui/material";
import { Button, CloseButton } from "components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";



export const NotifyModal = () => {
  const dispatch = useDispatch();
  const open = useSelector(TOGGLES_SELECTORS.getDeleteNotify);
  const handleClick = () => dispatch(TOGGLES_ACTIONS.setDeleteNotify());

  return (
    <Dialog open={open} onClose={handleClick}>
      <DialogTitle sx={{ padding: "12px 16px" }}>Elanın silinməsi</DialogTitle>
      <DialogContent dividers sx={{ padding: "16px" }}>
        <Typography>Bayram elanını silmək istədiyinizə əminsiniz?</Typography>
      </DialogContent>
      <DialogActions sx={{ padding: "12px 16px" }}>
        <CloseButton onClick={handleClick} text="İmtina et" />
        <Button color="error" text="Sil" />
      </DialogActions>
    </Dialog>
  );
};
