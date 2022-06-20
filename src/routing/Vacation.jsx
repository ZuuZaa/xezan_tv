import {
  VacationFormWorker,
  VacationFormWorkerSaved,
  VacationFormDepartment,
  VacationFormDepartmentEdit,
  VacationFormHrEdit,
  VacationFormHr
} from "containers/Inquiries/VacationContainer/pages";
import { VacationPage } from "pages/InquiriesPage/VacationPage";
import { Route } from "react-router-dom";


export const Vacation = () => {
  return <>
    <Route path="/vacation" element={<VacationPage />}>
      <Route path=":id" element={<></>} />
    </Route>
    <Route path="/vacation/worker/new" element={<VacationFormWorker />} />
    <Route path="/vacation/worker/view" element={<VacationFormWorkerSaved />} />
    <Route path="/vacation/department/edit" element={<VacationFormDepartmentEdit />} />
    <Route path="/vacation/department/view" element={<VacationFormDepartment />} />
    <Route path="/vacation/hr/edit" element={<VacationFormHrEdit />} />
    <Route path="/vacation/hr/view" element={<VacationFormHr />} />
  </>
};