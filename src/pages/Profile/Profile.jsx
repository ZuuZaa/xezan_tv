import { Card, Box } from "@mui/material";
import { ProfileSettings } from "./ProfileSettings";
import { UserSettings } from "./UserSettings";
import { ProfileSecurity } from "./ProfileSecurity";
import { Route, Routes } from "react-router-dom";
import { ChangePass } from "./ChangePass";

export const Profile = () => {
  return (
    <Card sx={{ height: "100%", display: "flex" }}>
      <ProfileSettings />
      <Box sx={{ padding: "16px", width: "100%" }}>
        <Routes>
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/security" element={<ProfileSecurity />} />
          <Route path="/change-password" element={<ChangePass />} />
        </Routes>
      </Box>
    </Card>
  );
};
