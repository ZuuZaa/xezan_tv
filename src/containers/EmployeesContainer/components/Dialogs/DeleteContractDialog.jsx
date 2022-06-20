import { DialogContent, DialogTitle, Dialog, DialogActions, Typography } from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';

export const DeleteContractDialog = ({ contractId, del, setDelete }) => {

  const handleClose = () => setDelete(false)
  return (
    <Dialog open={del} onClose={handleClose}>
      <DialogTitle sx={{ padding: "12px 16px" }}>
        Müqavilənin silinməsi
      </DialogTitle>
      <DialogContent dividers sx={{ padding: "16px" }}>
        <Typography>
          <strong>1205202006 </strong>
          nömrəli müqaviləni silmək istədiyinizdən əminsiniz?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ padding: "12px 16px" }}>
        <CloseButton onClick={handleClose} text="İmtina et" />
        <Button color="error" text="Bəli" onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};