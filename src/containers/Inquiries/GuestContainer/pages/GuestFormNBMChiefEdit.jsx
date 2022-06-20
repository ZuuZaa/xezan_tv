import { Box, FormControl, Grid, MenuItem } from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { Autocomplete, TextField } from "formik-mui";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { GuestDetailsModal } from "./GuestDetailsModal";
import { useStyles } from "styles/Styles";
import { InfoSection } from "containers/components/InfoSection";
import { InputAutocomplete } from "components/Input/InputAutocomplete";
import { CustomInput } from "components/Input/CustomInput";

const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "NBM rəisin", label: "NBM rəisin göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "NBM rəisin göndərməsi" },
  { value: "four", label: "NBM əməkdaşın göndərməsi" },
]

const initialValues = {
  visitors: [],
  carPlate: [],
  visitDate: "",
  visitPurpose: "",
  note: "",
  result: ""
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const GuestFormNBMChiefEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggle = () => dispatch(TOGGLES_ACTIONS.setDetailsDialog())

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="three" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <InfoSection name="Lamiə Səyidova Əliağa" />
              <Box className={classes.formBox}>
                <FormHead header="NBM rəisin göndərməsi" />
                <Grid container spacing={2} padding="16px">

                  <Grid item xs={12}>
                    <Field
                      disabled
                      multiple
                      freeSolo
                      name="visitors"
                      component={Autocomplete}
                      filterSelectedOptions
                      options={[]}
                      ChipProps={{
                        size: 'small',
                      }}
                      renderInput={(params) => {
                        return <InputAutocomplete
                          {...params}
                          label="Gələcək şəxs"
                        />;
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      disabled
                      multiple
                      freeSolo
                      name="carPlate"
                      component={Autocomplete}
                      filterSelectedOptions
                      options={[]}
                      ChipProps={{
                        size: 'small'
                      }}
                      renderInput={(params) => {
                        return <InputAutocomplete
                          {...params}
                          label="Nəqliyyat ilə bağlı qeyd"
                        />;
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <FormControl fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "2px dotted"
                            }
                          }
                        }}
                      >
                        <Field
                          disabled
                          name="visitDate"
                          component={DatePicker}
                          label="Gəlmə tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={12}>
                    <CustomInput
                      disabled
                      name="visitPurpose"
                      label="Gəlmə səbəbi"
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "2px dotted"
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomInput
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "2px dotted"
                        }
                      }}
                      disabled
                      name="note"
                      label="Sorğu ilə bağlı qeyd"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="result"
                      select
                      InputLabelProps={{
                        variant: 'filled'
                      }}
                      InputProps={{
                        notched: false
                      }}
                      component={TextField}
                      label="Nəticə"
                    >
                      {resultDatas.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                </Grid>
              </Box>

              <Box className={classes.button}>
                <SubmitButton onClick={toggle} text="Yadda saxla və bitir" />
              </Box>
              <GuestDetailsModal />
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};