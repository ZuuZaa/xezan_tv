import {
  LastQueries,
  MyQueries,
  Employees,
  Anniversary,
  DayOff,
  Vacation,
  NextBirthdays,
  Trip,
  Advertisements,
  VacationBalance,
} from "./components/MainMenu";

import { Box } from "@mui/material";
import { SearchBar } from "components/SearchBar";

const MainMenu = () => {
  return (
    <>
      <SearchBar />
      <Box padding="16px">
        <LastQueries />
        <MyQueries />
        <Employees />
        <Anniversary />
        <DayOff/>
        <Vacation/>
        <NextBirthdays/>
        <Trip/>
        <Advertisements/>
        <VacationBalance/>
      </Box>
    </>
  );
};
export default MainMenu;
