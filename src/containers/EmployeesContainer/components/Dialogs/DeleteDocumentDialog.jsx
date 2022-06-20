import { DialogContent, DialogTitle, Dialog, DialogActions, Typography } from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';

export const DeleteDocumentDialog = ({ documentId, del, setDelete }) => {

  const handleClose = () => setDelete(false)
  return (
    <Dialog open={del} onClose={handleClose}>
      <DialogTitle sx={{ padding: "12px 16px" }}>
        Sənədin silinməsi
      </DialogTitle>
      <DialogContent dividers sx={{ padding: "16px" }}>
        <Typography>
          <strong>İlgar Abbasov.pdf</strong>
          adlı sənədi silmək istədiyinizdən əminsiniz?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ padding: "12px 16px" }}>
        <CloseButton onClick={handleClose} text="İmtina et" />
        <Button color="error" text="Bəli" onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};