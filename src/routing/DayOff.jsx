import {
  DayOffFormWorker,
  DayOffFormWorkerSaved,
  DayOffFormDepartment,
  DayOffFormDepartmentEdit,
  DayOffFormHrEdit,
  DayOffFormHr,
} from "containers/Inquiries/DayOffContainer/pages";
import { DayOffPage } from "pages/InquiriesPage/DayOffPage";
import { Route } from "react-router-dom";

export const DayOff = () => {
  return (
    <>
      <Route path="/day-off" element={<DayOffPage />} >
        <Route path=":id" element={<></>} />
      </Route>
      <Route path="/day-off/worker/new" element={<DayOffFormWorker />} />
      <Route path="/day-off/worker/view" element={<DayOffFormWorkerSaved />} />
      <Route
        path="/day-off/department/edit"
        element={<DayOffFormDepartmentEdit />}
      />
      <Route path="/day-off/department/view" element={<DayOffFormDepartment />} />
      <Route path="/day-off/hr/edit" element={<DayOffFormHrEdit />} />
      <Route path="/day-off/hr/view" element={<DayOffFormHr />} />
    </>
  );
};
