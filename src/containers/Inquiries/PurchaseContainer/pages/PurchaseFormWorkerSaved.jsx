import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";
import { useStyles } from "styles/Styles";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "Satınalma göndərməsi" },
]

export const PurchaseFormWorkerSaved = () => {
  const classes = useStyles();

  const rows = [
    { name: "Problemin təsviri", value: "Sadə bir qeyd" },
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