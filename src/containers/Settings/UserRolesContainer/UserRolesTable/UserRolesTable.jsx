import { Table } from "components/Table";
import { UserRolesTableHeader } from "./UserRolesTableHeader";

export const UserRolesTable  = ({ data, loading, pagination=null }) => {
  const thead = UserRolesTableHeader();
  
  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};