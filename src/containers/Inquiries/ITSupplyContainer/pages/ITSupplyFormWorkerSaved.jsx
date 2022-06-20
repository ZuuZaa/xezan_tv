import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";
import { useStyles } from "styles/Styles";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "IT göndərməsi" },
]

export const ITSupplyFormWorkerSaved = () => {
  const classes = useStyles();

  const rows = [
    { name: "Problemin təsviri", value: "Mouse işləmir" },
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