import { Table } from "components/Table";
import { VacationTableHeader } from "./VacationHeader";

export const VacationTable = ({ data, loading, pagination=null }) => {
  const thead = VacationTableHeader();

  return <Table thead={thead} tbody={data} loading={loading} pagination={pagination}/>;
};