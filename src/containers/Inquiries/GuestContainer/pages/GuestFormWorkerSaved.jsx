import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useStyles } from "styles/Styles";
import { ShowDetails } from "containers/components/ShowDetails/ShowDetails";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
  { value: "four", label: "NBM əməkdaşın göndərməsi" },
]

export const GuestFormWorkerSaved = () => {
  const classes = useStyles();

  const rows = [
    { name: "Gələcək şəxslər", value: "İlqar Abbasov, Orxan Axnazarov, Zümrüd Hüseynova, Ceyhun Əhmədli" },
    { name: "Nəqliyyat ilə bağlı qeyd", value: "00-AS-000, 00-AS-000" },
    { name: "Gəlmə tarixi", value: "22/06/2021" },
    { name: "Görüşəcək şəxs", value: "Ələkbərov Samir" },
    { name: "Gəlmə səbəbi", value: "Marketinq şöbə rəisi ilə görüş" },
    { name: "Sorğu ilə bağlı qeyd", value: "Sadə bir qeyd" },
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