import { Box } from "@mui/material";
import { DeleteIcon } from "components/DeleteIcon/DeleteIcon";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { EditUserRoles } from "../components/EditUserRoles";
import { useNavigate } from "react-router-dom";



export const UserRolesTableHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenClick = (id) => {
    navigate(id)
    dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())
  }

  return [
    {
      key: "name",
      label: "Adı",
      style: { minWidth: 220 },
    },
    {
      key: "isStatic",
      label: "Statikdir?",
      style: { minWidth: 120 },
    },
    {
      key: "description",
      label: "Təsviri",
      style: { minWidth: 170 },
    },
    {
      key: "actions",
      label: "",
      style: { minWidth: 170 },
      render(row) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
            <EditUserRoles userRoleId={row._id} />
            <DeleteIcon onClick={() => handleOpenClick(row._id)} />
          </Box>
        )
      }
    },
  ]
};