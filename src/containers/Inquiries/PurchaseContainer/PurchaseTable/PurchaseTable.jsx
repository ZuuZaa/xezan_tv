import { Table } from "components/Table";
import { PurchaseTableHeader } from "./PurchaseTableHeader";

export const PurchaseTable = ({ data, loading, pagination=null }) => {
  const thead = PurchaseTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};