import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { EmployeesTable } from "./EmpleyeesTable";
import { EMPLOYEES_ALL_ACTIONS, EMPLOYEES_ALL_SELECTORS } from "store/Employees";
import { SearchBar } from "components/SearchBar";
import { AddButton, SearchButton } from "components/Buttons";
import { Box, Collapse, Snackbar, Alert, IconButton } from '@mui/material';
import { SearchForm } from "containers/EmployeesContainer/components/SearchForm";
import { useNavigate } from "react-router-dom";
import { Warning } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { DeleteEmployeeDialog } from "./components/Dialogs";

export const EmployeesContainer = () => {


  const employees = useSelector(EMPLOYEES_ALL_SELECTORS.getEmployeesAll);
  const loading = useSelector(EMPLOYEES_ALL_SELECTORS.getEmployeesAllLoading);
  const [searchOpen, setSearchOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addNewHandleClick = () => navigate("/employees/new-employee");
  const empleyeesFullName = "Xəyalə Aslanova"
  const snackBarText = `"${empleyeesFullName}" haqqında məlumatlar arxivləndi`;

  const handleClose = () => {
    setSnackBar(false);
  };
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  useEffect(() => {
    dispatch(EMPLOYEES_ALL_ACTIONS.fetchEmployeesAll())
  }, [dispatch])

  return (
    <>
      <SearchBar buttons={
        <>
          <SearchButton onClick={() => {
            setSearchOpen(!searchOpen);
          }} />
          <AddButton onClick={addNewHandleClick} />
        </>
      } />
      <Box padding="16px">
        <Collapse in={searchOpen}>{<SearchForm />}</Collapse>
        <EmployeesTable data={employees} loading={loading} pagination />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackBar}
        onClose={handleClose}
        key='error-alert'
        action={action}
      >
        <Alert onClose={handleClose} icon={<Warning fontSize="inherit" />} variant="filled" severity="success" >{snackBarText}</Alert>
      </Snackbar>
      <DeleteEmployeeDialog />
    </>
  );
}
