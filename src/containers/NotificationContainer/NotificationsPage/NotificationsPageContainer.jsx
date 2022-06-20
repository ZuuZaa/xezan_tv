import { Card, CardContent } from "@mui/material";
import { MAINPAGE_ACTIONS, MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NotificationsPageTable } from "./NotificationsPageTable";
import { SearchBar } from "components/SearchBar";
import { AddButton } from "components/Buttons";
import { useNavigate } from "react-router-dom";
import { NotifyModal } from "pages/NotificationsPage/components/NotifyModal";

export const NotificationsPageContainer = () => {
  const dispatch = useDispatch();
  const notificationsPageData = useSelector(
    MAINPAGE_SELECTORS.getAdvertisementsData
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(MAINPAGE_ACTIONS.fetchAdvertisements());
  }, [dispatch]);
  const addNewHandleClick = () => navigate("/notificationForm");
  return (
    <>
      <SearchBar buttons={<AddButton onClick={addNewHandleClick} />} />
      <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
        <CardContent>
          <NotificationsPageTable data={notificationsPageData} />
          <NotifyModal />
        </CardContent>
      </Card>
    </>
  );
};
