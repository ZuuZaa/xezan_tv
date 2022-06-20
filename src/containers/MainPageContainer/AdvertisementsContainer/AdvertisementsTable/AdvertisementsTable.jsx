import { AdvertisementsTableHeader } from "./AdvertisementsTableHeader";
import { Table } from "components/Table";
export const AdvertisementsTable = ({ data, loading }) => {
  const thead = AdvertisementsTableHeader();
  return <Table tbody={data} thead={thead} loading={loading} />;
};
