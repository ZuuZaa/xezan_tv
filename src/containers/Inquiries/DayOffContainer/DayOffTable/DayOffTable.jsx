import { Table } from "components/Table";
import { DayOffTableHeader } from "./DayOffTableHeader";

export const DayOffTable = ({ data, loading, pagination=null }) => {
  const thead = DayOffTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};