import { Table } from "components/Table";
import { EmployeesTableHeader } from "./EmployeesTableHeader";

export const EmployeesTable  = ({ data, loading, pagination=null }) => {
  const thead = EmployeesTableHeader();
  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};