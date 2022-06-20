import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  Grid,
  TextField as MuiTextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  FormHelperText
} from "@mui/material";
import { Autocomplete } from 'formik-mui'
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { Field, Form, Formik } from "formik";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useStyles } from "styles/Styles";
import {
  tabs,
  times,
  departments,
  disabilities,
  relatives,
  education,
  positions,
  employee
} from "containers/EmployeesContainer/constants";


export const EmployeesDetailsEdit = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    navigate('/employees/details')
  };

  return (
    <Box>
      <Formik initialValues={employee} onSubmit={onSubmit}>
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="main" />
          <Box sx={{ padding: 2, margin: 2, border: "1px solid #C4C4C4", borderRadius: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ad*"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Soyad*"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ata*"
                  name="patronymic"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="gender">Cinsi*</FormLabel>
                <Field
                  fullWidth
                  name="gender"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Kişi" control={<Radio />} label="Kişi" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qadın" control={<Radio />} label="Qadın" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormControl fullWidth>
                    <Field
                      name="birthDay"
                      component={DatePicker}
                      label="Doğum tarixi"
                      inputFormat="dd/MM/yyyy"
                      InputAdornmentProps={{ position: "start" }}
                    />
                  </FormControl>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Yaş"
                  name="age"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="marital-status">Ailə vəziyyəti</FormLabel>
                <Field
                  fullWidth
                  name="maritalStatus"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Evli" control={<Radio />} label="Evli" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qadın" control={<Radio />} label="Qadın" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="FIN"
                  name="fin"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Şəxsiyyət vəsiqənin seriya nömrəsi"
                  name="IDnumber"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Şirkət"
                  name="company"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="department"
                  name="department"
                  component={Autocomplete}
                  options={departments}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Şöbə" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="position-status">Vəzifə təsnifatı</FormLabel>
                <Field
                  fullWidth
                  name="positionStatus"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Fəhlə" control={<Radio />} label="Fəhlə" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qulluqçu" control={<Radio />} label="Qulluqçu" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="position"
                  name="position"
                  component={Autocomplete}
                  options={positions}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Vəzifə" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Vətəndaşlıq"
                  name="citizenship"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Milliyyəti"
                  name="nationality"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="education"
                  name="education"
                  component={Autocomplete}
                  options={education}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Təhsil" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="E-ünvan"
                  name="email"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="staff">Ştat tutumu</FormLabel>
                <Field
                  fullWidth
                  name="staff"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Tam" control={<Radio />} label="Tam" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Natamam" control={<Radio />} label="Natamam" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Mobil nömrə"
                  name="mobile"
                />
                <FormHelperText id="outlined-weight-helper-text">+994 00 000 00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Korporativ nömrə"
                  name="corporateNumber"
                />
                <FormHelperText id="outlined-weight-helper-text">+994 00 000 00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Daxili nömrə"
                  name="internalNumber"
                />
                <FormHelperText id="outlined-weight-helper-text">00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ev telefonu"
                  name="homeNumber"
                />
                <FormHelperText id="outlined-weight-helper-text">012 000 00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="relatives"
                  name="relatives"
                  component={Autocomplete}
                  options={relatives}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Yaxın qohumun kimliyi" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Yaxın qohum(mob)"
                  name="relativesPhoneNumber"
                />
                <FormHelperText id="outlined-weight-helper-text">+994 00 000 00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="workingTime"
                  name="workingTime"
                  component={Autocomplete}
                  options={times}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="İş vaxtı" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Həftəlik iş saatı"
                  name="weeklyWorkingHours"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="disabilities"
                  name="disabilities"
                  component={Autocomplete}
                  options={disabilities}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Əlillik" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Sosial sığorta nömrəsi"
                  name="insurance"
                />
              </Grid>
            </Grid>

          </Box>
          <Box className={classes.button} sx={{ margin: 2 }}>
            <SubmitButton text="Yadda saxla" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};