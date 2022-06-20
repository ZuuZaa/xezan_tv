import { DialogContent, DialogTitle, Dialog, DialogActions, Typography} from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";

export const DeActivateUserDialog = ({userId}) => {
  const dispatch = useDispatch();

  const open = useSelector(TOGGLES_SELECTORS.getDeactivateUserToggle);
  const close = () => dispatch(TOGGLES_ACTIONS.setDeactivateUser());

  return (
    <Dialog open={open} onClose={close}>

          <DialogTitle sx={{ padding: "12px 16px" }}>
            İstifadəçinin deaktivləşdirilməsi
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Typography>
              {/* <strong>{`${userId}`}</strong> */}
              Bu istifadəçini deaktivləşdirmək istədiyinizə əminsiniz?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ padding: "12px 16px" }}>
            <CloseButton onClick={close} text="İmtina et"/>
            <Button color="error" text="Bəli" />
          </DialogActions>

    </Dialog>
  );
};