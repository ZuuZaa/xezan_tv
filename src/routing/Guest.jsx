import {
  GuestFormWorker,
  GuestFormWorkerSaved,
  GuestFormDepartment,
  GuestFormDepartmentEdit,
  GuestFormNBMChief,
  GuestFormNBMChiefEdit,
  GuestFormNBMWorker,
  GuestFormNBMWorkerEdit
} from "containers/Inquiries/GuestContainer/pages";
import { GuestPage } from "pages/InquiriesPage/GuestPage";
import { Route } from "react-router-dom";


export const Guest = () => {
  return <>
    <Route path="/guest" element={<GuestPage />}>
      <Route path=":id" element={<></>} />
    </Route>
    <Route path="/guest/worker/new" element={<GuestFormWorker />} />
    <Route path="/guest/worker/view" element={<GuestFormWorkerSaved />} />
    <Route path="/guest/department/edit" element={<GuestFormDepartmentEdit />} />
    <Route path="/guest/department/view" element={<GuestFormDepartment />} />
    <Route path="/guest/nbm/edit" element={<GuestFormNBMChiefEdit />} />
    <Route path="/guest/nbm/view" element={<GuestFormNBMChief />} />
    <Route path="/guest/nbmworker/edit" element={<GuestFormNBMWorkerEdit />} />
    <Route path="/guest/nbmworker/view" element={<GuestFormNBMWorker />} />
  </>
};