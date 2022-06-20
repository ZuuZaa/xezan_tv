import { Table } from "components/Table";
import { ITSupplyTableHeader } from "./ITSupplyTableHeader";

export const ITSupplyTable = ({ data, loading, pagination=null }) => {
  const thead = ITSupplyTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};