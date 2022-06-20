import { UserRolesPage } from "pages/SettingsPage/UserRolesPage";
import { Route } from "react-router-dom";

export const UserRoles = () => {
  return (
    <Route path="/userroles" element={<UserRolesPage />}>
      <Route path=":id" element={<></>} />
    </Route>
  );
};
