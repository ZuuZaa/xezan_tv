import { Typography, Avatar, Box, MenuItem, IconButton, Tooltip } from "@mui/material";
import { MoreOptions } from 'components/MoreOptions';
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useStyles } from "../Styles";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";



export const EmployeesTableHeader = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addNewHandleClick = () => navigate("/employees/details");
  const editHandleClick = () => navigate("/employees/details/edit"); 

  return [
    {
      key: "fullName",
      label: "A.S.A.",
      style: { minWidth: 200 },
      render: (row) => {
        return (
          <>
            <Avatar
              className={classes.avatar}
              alt={`${row.fullName}`}
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
      key: "email",
      label: "Elektron poçt",
      style: { minWidth: 170 }
    },
    {
      key: "position",
      label: "Vəzifə",
      style: { minWidth: 150 }
    },
    {
      key: "department",
      label: "Şöbə",
      style: { minWidth: 150 }
    },
    {
      key: "phone",
      label: "Əlaqə nömrəsi",
      style: { minWidth: 150 }
    },
    {
      key: "icons",
      label: "",
      style: { minWidth: 12 }
    },
    {
      key: "actions",
      label: "",
      style: { minWidth: 12 },
      render(row) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
            <Tooltip title="detallar">
              <IconButton onClick={addNewHandleClick}>
                <RemoveRedEyeIcon sx={{ color: 'gray' }} />
              </IconButton>
            </Tooltip>

            <MoreOptions userId='1'>
              <MenuItem onClick={editHandleClick}>Redaktə et</MenuItem>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setDeleteEmployee())}>Arxiv</MenuItem>
            </MoreOptions>
          </Box>
        )
      }
    }
  ]
};

