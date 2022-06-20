import { UsersPage } from "pages/SettingsPage/UsersPage";
import { Route } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <Route path="/users" element={<UsersPage />}>
        <Route path=":id" element={<></>} />
      </Route>
    </>
  );
};
