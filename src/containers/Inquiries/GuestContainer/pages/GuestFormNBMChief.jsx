import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { EditIcon } from "containers/components/EditIcon";
import { InfoIcon } from "containers/components/InfoIcon";
import { useNavigate } from "react-router-dom";
import { useStyles } from "styles/Styles";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";


export const GuestFormNBMChief = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const tabs = [
    { value: "one", label: "Sorğunun formalaşdırılması" },
    { value: "two", label: "Departament rəhbərin göndərməsi" },
    { value: "three", label: "NBM rəisin göndərməsi" },
    { value: "four", label: "NBM əməkdaşın göndərməsi" },
  ]

  const rows = [
    { name: "Gələcək şəxslər", value: "İlqar Abbasov, Orxan Axnazarov, Zümrüd Hüseynova, Ceyhun Əhmədli" },
    { name: "Nəqliyyat ilə bağlı qeyd", value: "00-AS-000, 00-AS-000" },
    { name: "Gəlmə tarixi", value: "22/06/2021" },
    { name: "Gəlmə səbəbi", value: "Marketinq şöbə rəisi ilə görüş" },
    { name: "Qeyd", value: "Sadə bir qeyd" },
    { name: "Nəticə", value: "NBM rəisin göndərməsi" },
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
          header="NBM rəisin göndərməsi"
          data={rows}
          actions={
            <>
              <EditIcon onClick={() => navigate("/guest/nbm/edit")} />
              <InfoIcon />
            </>
          }
        />
      </Box>
    </Box>
  );
};