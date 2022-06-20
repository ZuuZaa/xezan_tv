import { Box, Divider, Typography } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { EditIcon } from "containers/components/EditIcon";
import { InfoIcon } from "containers/components/InfoIcon";
import { useNavigate } from "react-router-dom";
import { useStyles } from "styles/Styles";
import { InfoSection } from "containers/components/InfoSection";
import { FormHead } from "containers/components/FormHead";
import { ResultTable } from "containers/components/ResultTable/ResultTable";


export const GuestFormNBMWorker = () => {
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
    { name: "Görüşəcək şəxs", value: "Ələkbərov Samir" },
    { name: "Gəlmə səbəbi", value: "Marketinq şöbə rəisi ilə görüş" },
    { name: "Sorğu ilə bağlı qeyd", value: "Sadə bir qeyd" },
    { name: "Nəticə", value: "Təsdiqləndi" },
  ]

  const guests = [
    {
      name: "Məhəmməd Vəliyev",
      datas: [
        { name: "Status", value: "Gəldi" },
        { name: "Gəlmə tarixi", value: "11/06/2021 13:32" },
        { name: "Getmə tarixi", value: "11/06/2021 18:32" },
        { name: "Qeyd", value: "Hər şey qaydasındadır" }
      ]
    },
    {
      name: "İlqar Abbasov",
      datas: [
        { name: "Status", value: "Gəlmədi" },
        { name: "Gəlmə tarixi", value: "-" },
        { name: "Getmə tarixi", value: "-" },
        { name: "Qeyd", value: "Xəstə olduğuna görə iştirak edə bilməyib" }
      ]
    },
    {
      name: "Zümrüd Hüseynova",
      datas: [
        { name: "Status", value: "Buraxılmadı" },
        { name: "Gəlmə tarixi", value: "-" },
        { name: "Getmə tarixi", value: "-" },
        { name: "Qeyd", value: "COVİD 19 sertifikatı yoxdur" }
      ]
    }
  ]

  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} value="four" />
      <Box className={classes.container}>
        <InfoSection name="Lamiə Səyidova Əliağa" />
        <Box
          // className={classes.formBox}
          sx={{
            border: "1px solid #E0E0E0",
            borderRadius: "4px"
          }}
        >
          <FormHead
            header="NBM əməkdaşın göndərməsi"
            actions={
              <>
                <EditIcon onClick={() => navigate("/guest/nbmworker/edit")} />
                <InfoIcon />
              </>
            }
          />
          <Box className={classes.tableBox} padding="0 16px">
            <ResultTable data={rows} />
            <Divider />
            <Box>
              <Typography
                sx={{
                  margin: "16px 0",
                  fontWeight: 500,
                  fontSize: "18px"
                }}
              >
                Qonaqlar
              </Typography>

              {guests.map((guest, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      border: "1px solid #E0E0E0",
                      padding: "0 16px",
                      borderRadius: "4px",
                      margin: "12px 0"
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: "12px",
                        fontWeight: 500,
                        fontSize: "16px"
                      }}
                    >
                      {guest.name}
                    </Typography>
                    <ResultTable data={guest.datas} />
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};