import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Collapse } from "@mui/material";
import { USERS_ACTIONS, USERS_SELECTORS } from "store/Users";
import { AddNewUserDialog, DeActivateUserDialog, DeleteUserDialog, EditUserDialog, PasswordUpdateDialog } from "containers/Settings/UsersContainer/components/Dialogs"
import { SearchBar } from "components/SearchBar";
import { SearchForm } from "containers/Settings/components/SearchForm";
import { AddButton, SearchButton } from "components/Buttons";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { UsersTable } from "./UsersTable/UsersTable";



export const UsersContainer = () => {

  const dispatch = useDispatch();
  const users = useSelector(USERS_SELECTORS.getUsers);
  const loading = useSelector(USERS_SELECTORS.getUsersLoading);
  const [searchOpen, setSearchOpen] = useState(false);
  const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())


  useEffect(() => {
    dispatch(USERS_ACTIONS.fetchUsers())
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
        <UsersTable data={users} loading={loading} pagination/>
        <AddNewUserDialog />
        <EditUserDialog />
        <DeleteUserDialog />
        <DeActivateUserDialog />
        <PasswordUpdateDialog />
      </Box>
    </>
  );
};