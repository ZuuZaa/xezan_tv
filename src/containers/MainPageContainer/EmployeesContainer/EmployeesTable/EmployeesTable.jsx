import { EmployeesTableHeader } from "./EmployeesTableHeader";
import { Table } from "components/Table";

export const EmployeesTable=({data , loading})=>{
    const thead= EmployeesTableHeader()
    return <Table thead={thead} tbody={data} loading={loading} />
}