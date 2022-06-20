import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useStyles } from "styles/Styles";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

export const BusinessTripFormWorkerSaved = () => {
  const classes = useStyles();

  const rows = [
    { name: "Başlama tarixi", value: "25/05/2021" },
    { name: "Bitmə tarixi", value: "21/06/2021" },
    { name: "Qeyd", value: "Sadə qeyd" },
    { name: "Nəticə", value: "Departament rəhbərin göndərməsi" },
  ]

  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} value="one" />
      <Box className={classes.container}>
        <ShowDetails
          name="Lamiə Səyidova Əliağa"
          header="Sorğunun formalaşdırılması"
          data={rows}
        />
      </Box>
    </Box>
  );
};