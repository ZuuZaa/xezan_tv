import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { EditIcon } from "containers/components/EditIcon";
import { InfoIcon } from "containers/components/InfoIcon";
import { useNavigate } from "react-router-dom";
import { useStyles } from "styles/Styles";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

export const BusinessTripFormDepartment = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const rows = [
    { name: "Başlama tarixi", value: "25/05/2021" },
    { name: "Bitmə tarixi", value: "21/06/2021" },
    { name: "Skan edilmiş sənədlər", value: "-" },
    { name: "Qeyd", value: "Sadə qeyd" },
    { name: "Nəticə", value: "Departament rəhbərin göndərməsi" },
  ]
  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} value="two" />
      <Box className={classes.container}>
        <ShowDetails
          name="Lamiə Səyidova Əliağa"
          header="Departament rəhbərin göndərməsi"
          data={rows}
          actions={
            <>
              <EditIcon onClick={() => navigate("/business-trip/department/edit")} />
              <InfoIcon />
            </>
          }
        />
      </Box>
    </Box>
  );
};