import { DialogContent, DialogTitle, Dialog, DialogActions, Typography } from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';
import { deleteUserRoles } from "lib/api/userRoles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import { USER_ROLES_ACTIONS, USER_ROLES_SELECTORS } from "store/UserRoles";

export const DeleteRoleDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [userRoleName, setUserRoleName] = useState('')

  const open = useSelector(TOGGLES_SELECTORS.getDeleteRoleDialogToggle)
  const userRoles = useSelector(USER_ROLES_SELECTORS.getUserRoles);

  const findUserRole = (id, data) => data.find(userRole => userRole._id === id)
  const close = () => dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())

  const handleDelete = (id) => {
    deleteUserRoles(id)
      .then(res => {
        navigate('/userroles')
        dispatch(USER_ROLES_ACTIONS.fetchUserRoles())
      })
    close();
  }

  useEffect(() => {
    if (id) {
      const userRole = findUserRole(id, userRoles);
      setUserRoleName(userRole.name);
    }
  }, [id, userRoles])

  return (
    <Dialog open={open} onClose={close}>

      <DialogTitle sx={{ padding: "12px 16px" }}>
        Rolun silinməsi
      </DialogTitle>
      <DialogContent dividers sx={{ padding: "16px" }}>
        <Typography>
          <strong>{`${userRoleName} `}</strong>
          rolunu silmək istədiyinizə əminsiniz?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ padding: "12px 16px" }}>
        <CloseButton onClick={close} text="İmtina et" />
        <Button color="error" text="Sil"
          onClick={() => handleDelete(id)}
        />
      </DialogActions>

    </Dialog>
  );
};