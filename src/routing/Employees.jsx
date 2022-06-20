
import { EmployeesPage } from "pages/EmployeesPage";
import { Route } from "react-router-dom";
import { 
  NewEmployeesForm, 
  NewEmployeesContract,
  NewEmployeesOrder,
  NewEmployeesSalary,
  NewEmployeesVacation,
  NewEmployeesDocuments,
  EmployeesDetails, 
  EmployeesContractDetails, 
  EmployeesOrderDetails, 
  EmployeesSalaryDetails, 
  EmployeesVacationDetails, 
  EmployeesDocumentsDetails,
  EmployeesDetailsEdit,
} from 'containers/EmployeesContainer/pages';

export const Employees = () => {
  return (
    <>
      <Route path="/employees" element={<EmployeesPage />} >
        <Route path=":id" element={<></>}/>
      </Route>
      <Route path="/employees/new-employee" element={<NewEmployeesForm />} />
      <Route path="/employees/new-employee/contract" element={<NewEmployeesContract />} />
      <Route path="/employees/new-employee/order" element={<NewEmployeesOrder />} />
      <Route path="/employees/new-employee/salary" element={<NewEmployeesSalary />} />
      <Route path="/employees/new-employee/vacations" element={<NewEmployeesVacation />} />
      <Route path="/employees/new-employee/documents" element={<NewEmployeesDocuments />} />
      <Route path="/employees/details" element={<EmployeesDetails />} />
      <Route path="/employees/details/edit" element={<EmployeesDetailsEdit />} />
      <Route path="/employees/details/contract" element={<EmployeesContractDetails />} />
      <Route path="/employees/details/order" element={<EmployeesOrderDetails />} />
      <Route path="/employees/details/salary" element={<EmployeesSalaryDetails />} />
      <Route path="/employees/details/vacations" element={<EmployeesVacationDetails />} />
      <Route path="/employees/details/documents" element={<EmployeesDocumentsDetails />} />
    </>
  );
};