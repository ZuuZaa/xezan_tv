import { NotificationsPage } from "pages/NotificationsPage/components/Notification/NotificationsPage";
import { NotifyEdit } from "pages/NotificationsPage/components/NotifyEdit";
import { NotifyView } from "pages/NotificationsPage/components/NotifyView";
import { NotificationForm } from "pages/NotificationsPage/components/NotificationForm";
import { Route } from "react-router-dom";

export const Notifications = () => {
  return (
    <>
      <Route path="/notification" element={<NotificationsPage />} />
      <Route path="/notificationForm" element={<NotificationForm />} />
      <Route path="/notificationEdit" element={<NotifyEdit />} />
      <Route path="/notificationView" element={<NotifyView />} />
    </>
  );
};
