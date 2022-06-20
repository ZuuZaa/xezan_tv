import { Box, MenuItem } from "@mui/material";
import { MoreOptions } from "components/MoreOptions";
// import { useDispatch } from "react-redux";
// import { TOGGLES_ACTIONS } from "store/Toggles";
import { ShowHide } from "./components/ShowHide";


export const VacationTableHeader = () => {
  // const dispatch = useDispatch();
  // const handleOpenClick = () => dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())

  return (
    [
      {
        key: "fullName",
        label: "Ad Soyad Ata",
        style: { minWidth: 200 },
      },
      {
        key: "date",
        label: "Tarix",
        style: { minWidth: 200 },
      },
      {
        key: "status",
        label: "Status",
        style: { minWidth: 200 },
      },
      {
        key: "actions",
        label: "",
        style: { minWidth: 50 },
        render(row) {
          return (
            <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
              <ShowHide userId={row.id} />
              <MoreOptions userId={row._id}>
                <MenuItem onClick={() => console.log('download')}>Sənədi yüklə</MenuItem>
                <MenuItem onClick={() => console.log('edit')}>Redaktə et</MenuItem>
                <MenuItem onClick={() => console.log('delete')}>Sil</MenuItem>
              </MoreOptions>
            </Box>
          )
        }
      }
    ]
  );
}