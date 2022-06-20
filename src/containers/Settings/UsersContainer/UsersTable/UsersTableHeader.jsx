import { Typography, Avatar, Box, MenuItem } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { EditUser } from 'containers/Settings/UsersContainer/components/EditUser';
import { MoreOptions } from 'components/MoreOptions';
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";

const useStyles = makeStyles({
  avatar: {
    width: 28,
    height: 28,
    display: 'flex',
    marginRight: '10px',
  },
  data: {
    fontSize: "14px",
    fontWeight: "400"
  },
})


export const UsersTableHeader = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  return [
    {
      key: "fullName",
      label: "A.S.A.",
      style: {minWidth: 220},
      render: (row) => {
        return (
          <>
            <Avatar
              className={classes.avatar}
              alt={row.fullName}
              src={row.avatar}
            />
            <Typography
              className={classes.data}
            >
              {row.fullName}
            </Typography>
          </>
        );
      }
    },
    {
      key: "username",
      label: "İstifadəçi adı",
      style: { minWidth: 120}
    },
    {
      key: "email",
      label: "Elektron poçt",
      style: { minWidth: 170}
    },
    {
      key: "position",
      label: "Vəzifə",
      style: { minWidth: 170}
    },
    {
      key: "phone",
      label: "Əlaqə nömrəsi",
      style: { minWidth: 170}
    },
    {
      key: "actions",
      label: "",
      style: { minWidth: 12},
      render(row) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
            <EditUser userId={row._id} />
            <MoreOptions userId={row._id}>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setDeactivateUser())}>Deaktivləşdirin</MenuItem>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setPasswordUpdateDialog())}>Şifrəni yenilə</MenuItem>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())}>Sil</MenuItem>
            </MoreOptions>
          </Box>
        )
      }
    }
  ]
};