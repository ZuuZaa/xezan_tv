import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { EditIcon } from "containers/components/EditIcon";
import { InfoIcon } from "containers/components/InfoIcon";
import { useNavigate } from "react-router-dom";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";
import { useStyles } from "styles/Styles";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

export const DayOffFormHr = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const rows = [
    { name: "Day Off tarixi", value: "25/05/2021" },
    { name: "Növü", value: "Tam iş günü" },
    { name: "Nəticə", value: "Departament rəhbərin göndərməsi" },
  ]
  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} value="three" />
      <Box className={classes.container}>
        <ShowDetails
          name="Lamiə Səyidova Əliağa"
          header="HR göndərməsi"
          data={rows}
          actions={
            <>
              <EditIcon onClick={() => navigate("/day-off/hr/edit")} />
              <InfoIcon />
            </>
          }
        />
      </Box>
    </Box>
  );
};