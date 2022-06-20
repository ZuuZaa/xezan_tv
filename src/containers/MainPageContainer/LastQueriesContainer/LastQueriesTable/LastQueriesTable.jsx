import {Table} from "components/Table";
import { LastQueriesTableHeader } from "./LastQueriesTableHeader";

export const LastQueriesTable = ({ data , loading}) => {
  const thead = LastQueriesTableHeader();
  return <Table tbody={data} thead={thead} loading={loading} />;
};
