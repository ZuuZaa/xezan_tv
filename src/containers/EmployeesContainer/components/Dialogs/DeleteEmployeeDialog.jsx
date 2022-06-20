import { DialogContent, DialogTitle, Dialog, DialogActions, Typography } from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';
import { useDispatch, useSelector } from "react-redux";
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";

export const DeleteEmployeeDialog = (contractId) => {

  const dispatch = useDispatch();
  const handleOpen =  useSelector(TOGGLES_SELECTORS.getDeleteEmployeeToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setDeleteEmployee())

  return (
    <Dialog open={handleOpen} onClose={handleClose}>
      <DialogTitle sx={{ padding: "12px 16px" }}>
      Əməkdaşın arxivləməsi
      </DialogTitle>
      <DialogContent dividers sx={{ padding: "16px" }}>
        <Typography>
          <strong>“Xəyalə Aslanova”</strong>
           haqqında məlumatları arxivləməyə əminsiniz?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ padding: "12px 16px" }}>
        <CloseButton onClick={handleClose} text="İmtina et" />
        <Button color="error" text="Arxiv et" onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};