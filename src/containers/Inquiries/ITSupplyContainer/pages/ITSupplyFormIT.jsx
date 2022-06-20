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
  { value: "three", label: "IT göndərməsi" },
]

export const ITSupplyFormIT = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const rows = [
    { name: "Qeyd", value: "Sadə bir qeyd" },
    { name: "Nəticə mətni", value: "Hər şey qaydasındadır" },
    { name: "Nəticə", value: "IT göndərməsi" },
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
          header="IT göndərməsi"
          data={rows}
          actions={
            <>
              <EditIcon onClick={() => navigate("/it-supply/it/edit")} />
              <InfoIcon />
            </>
          }
        />
      </Box>
    </Box>
  );
};