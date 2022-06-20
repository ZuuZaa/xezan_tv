import { Table } from "components/Table";
import { BusinessTripTableHeader } from "./BusinessTripTableHeader";

export const BusinessTripTable = ({ data, loading, pagination=null }) => {
  const thead = BusinessTripTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};