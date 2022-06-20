import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { CloseButton } from "components/Buttons";
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS, TOGGLES_SELECTORS } from "store/Toggles";

export const DetailsDialog = ({ header, data }) => {

  const dispatch = useDispatch();
  const open = useSelector(TOGGLES_SELECTORS.getDetailsDialogToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setDetailsDialog())

  return (
    <Dialog open={open} onClose={handleClose}>

      <DialogTitle sx={{ padding: '12px 16px' }}>
        {header}
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ padding: '0 16px' }}
      >
        <TableContainer>
          <Table>
            <TableBody>
              {data.map(row => (
                <TableRow
                  sx={{
                    '&:last-child td': {
                      borderBottom: 0,
                    }
                  }}
                  key={row.name}
                >
                  <TableCell
                    variant="head"
                    sx={{
                      padding: "0",
                      width: "269px"
                    }}>
                    {row.name}
                  </TableCell>

                  <TableCell
                    sx={{
                      width: "269px"
                    }}>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </DialogContent>

      <DialogActions sx={{ padding: '12px 16px' }}>
        <CloseButton onClick={handleClose} />
      </DialogActions>

    </Dialog >
  );
};