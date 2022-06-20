import { Table } from "components/Table";
import { UsersTableHeader } from "./UsersTableHeader";

export const UsersTable  = ({ data, loading, pagination=null }) => {
  const thead = UsersTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};