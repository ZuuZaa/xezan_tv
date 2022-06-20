import { useNavigate } from "react-router-dom";
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
import { useStyles } from "styles/Styles";
import { InputAutocomplete } from "components/Input/InputAutocomplete";
import { CustomInput } from "components/Input/CustomInput";

const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "NBM", label: "NBM rəisin göndərməsi" },
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
  date: "",
  meetingPerson: "",
  visitPurpose: "",
  note: "",
  result: ""
}


export const GuestFormWorker = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm()
    navigate("/guest/worker/view")
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {props => (<Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="one" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <Box className={classes.formBox}>
                <FormHead header="Sorğunun formalaşdırılması" />
                <Grid container spacing={2} padding="16px">

                  <Grid item xs={12}>
                    <Field
                      multiple
                      freeSolo
                      name="visitors"
                      component={Autocomplete}
                      filterSelectedOptions
                      options={[]}
                      ChipProps={{
                        size: 'small'
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

                  <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <FormControl fullWidth >
                        <Field
                          name="date"
                          component={DatePicker}
                          label="Gəlmə tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <CustomInput
                      name="meetingPerson"
                      label="Görüşəcək şəxs"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomInput
                      name="visitPurpose"
                      label="Gəlmə səbəbi"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomInput
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
                <SubmitButton text="Yadda saxla və yönləndir" />
              </Box>

            </Box>
          </Box>
        </Form>)}
      </Formik>
    </Box >
  );
};