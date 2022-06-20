import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { USER_ROLES_ACTIONS, USER_ROLES_SELECTORS } from "store/UserRoles";
import { NewRoleDialog, EditRoleDialog, DeleteRoleDialog } from "containers/Settings/UserRolesContainer/components/Dialogs";
import { SearchBar } from "components/SearchBar";
import { SearchButton } from "components/Buttons";
import { AddButton } from "components/Buttons";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { Box, Collapse } from "@mui/material";
import { UserRolesTable } from "./UserRolesTable";
import { SearchForm } from "../components/SearchForm";


export const UserRolesContainer = () => {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const userroles = useSelector(USER_ROLES_SELECTORS.getUserRoles);
  const loading = useSelector(USER_ROLES_SELECTORS.getUserRolesLoading);
  const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  useEffect(() => {
    dispatch(USER_ROLES_ACTIONS.fetchUserRoles())
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
        <UserRolesTable data={userroles} loading={loading} pagination />
        <NewRoleDialog />
        <EditRoleDialog />
        <DeleteRoleDialog />
      </Box>
    </>
  );
};