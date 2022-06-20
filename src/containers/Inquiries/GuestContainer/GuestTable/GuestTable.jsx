import { Table } from "components/Table";
import { GuestTableHeader } from "./GuestTableHeader";

export const GuestTable = ({ data, loading, pagination=null }) => {
  const thead = GuestTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};