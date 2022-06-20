import {
  PurchaseFormWorker,
  PurchaseFormWorkerSaved,
  PurchaseFormDepartment,
  PurchaseFormDepartmentEdit,
  PurchaseFormPurchase,
  PurchaseFormPurchaseEdit
} from "containers/Inquiries/PurchaseContainer/pages";
import { PurchasePage } from "pages/InquiriesPage/PurchasePage";
import { Route } from "react-router-dom";


export const Purchase = () => {
  return <>
    <Route path="/purchase" element={<PurchasePage />}>
      <Route path=":id" element={<></>} />
    </Route>
    <Route path="/purchase/worker/new" element={<PurchaseFormWorker />} />
    <Route path="/purchase/worker/view" element={<PurchaseFormWorkerSaved />} />
    <Route path="/purchase/department/edit" element={<PurchaseFormDepartmentEdit />} />
    <Route path="/purchase/department/view" element={<PurchaseFormDepartment />} />
    <Route path="/purchase/purchases/edit" element={<PurchaseFormPurchaseEdit />} />
    <Route path="/purchase/purchases/view" element={< PurchaseFormPurchase />} />
  </>
};