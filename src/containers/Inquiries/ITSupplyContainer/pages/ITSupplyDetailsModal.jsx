import { DetailsDialog } from "containers/components/DetailsDialog";

export const ITSupplyDetailsModal = () => {

  const rows = [
    { name: "A.S.A", value: "Hüseyn Lətifov İ." },
    { name: "Korporativ nömrə", value: "+994 55 434 43 43" },
    { name: "Vəzifə", value: "Aparıcı" },
    { name: "Şöbə", value: "Xəzər TV" },
    { name: "Yaradılma tarixi", value: "25/05/2021" },
  ]

  return (
    <DetailsDialog header="Sorğunun detalları" data={rows} />
  );
};