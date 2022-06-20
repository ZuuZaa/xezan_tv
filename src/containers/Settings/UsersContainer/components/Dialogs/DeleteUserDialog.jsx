import { DialogContent, DialogTitle, Dialog, DialogActions, Typography} from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';
import { deleteUser } from "lib/api/users";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import { USERS_ACTIONS, USERS_SELECTORS } from "store/Users";

export const DeleteUserDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [userName, setUserName] = useState('')

  const open = useSelector(TOGGLES_SELECTORS.getDeleteRoleDialogToggle)
  const users = useSelector(USERS_SELECTORS.getUsers);

  const findUser = (id, data) => data.find(user => user._id === id)
  const close = () => dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())

  const handleDelete = () => {
    deleteUser(id)
    .then(res => {
      navigate('/users')
      dispatch(USERS_ACTIONS.fetchUsers());
    })
    close();
  }

  useEffect(() => {
    if (id) {
      const user = findUser(id, users);
      setUserName(user.fullName);
    }
  }, [id, users])

  return (
    <Dialog open={open} onClose={close}>

          <DialogTitle sx={{ padding: "12px 16px" }}>
            İstifadəçinin silinməsi
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Typography>
              <strong>{userName}</strong> adlı istifadəçini silmək istədiyinizə əminsiniz?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ padding: "12px 16px" }}>
            <CloseButton onClick={close} text="İmtina et"/>
            <Button color="error" onClick={handleDelete} text="Sil" />
          </DialogActions>

    </Dialog>
  );
};