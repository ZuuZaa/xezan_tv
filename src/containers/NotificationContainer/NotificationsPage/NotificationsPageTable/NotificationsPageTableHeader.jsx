import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import { Tooltip, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DeleteModify } from "pages/NotificationsPage/components/DeleteModify";

export const NotificationsPageTableHeader = () => {

  const editNavigate = useNavigate();
  const viewNavigate = useNavigate();

  const editHandleClick = () => editNavigate("/notificationEdit");

  const viewHandleClick = () => viewNavigate("/notificationView");

  return [
    {
      key: "name",
      label: "Adı",
    },
    {
      key: "describe",
      label: "Təsviri",
    },
    {
      key: "creater",
      label: "Əlavə edən şəxs",
    },
    {
      key: "date",
      label: "Əlavə edilmə tarixi",
    },
    {
      key: "",
      label: "",
      render: () => {
        return (
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Tooltip title="Elanın təsviri">
              <IconButton onClick={viewHandleClick}>
                <VisibilityIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Redaktə et">
              <IconButton onClick={editHandleClick}>
                <CreateIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <DeleteModify />
          </Box>
        );
      },
    },
  ];
};
