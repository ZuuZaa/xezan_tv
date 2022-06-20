import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Box, Collapse } from "@mui/material";
import { AddButton, SearchButton } from "components/Buttons";
import { SearchBar } from "components/SearchBar";
import { InquiriesSearchForm } from "containers/components/InquiriesSearchForm";
import { QUERIES_ACTIONS, QUERIES_SELECTORS } from "store/Queries";
import { GuestTable } from "./GuestTable";


export const GuestContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const queries = useSelector(QUERIES_SELECTORS.getQueries);
  const loading = useSelector(QUERIES_SELECTORS.getQueriesLoading);
  const addNewHandleClick = () => navigate("/guest/worker/new")


  useEffect(() => {
    dispatch(QUERIES_ACTIONS.fetchQueries())
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
        <Collapse in={searchOpen}>{<InquiriesSearchForm />}</Collapse>
        <GuestTable data={queries} loading={loading} pagination />
      </Box>
    </>
  );
};