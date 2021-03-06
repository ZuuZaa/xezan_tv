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
  positions
} from "containers/EmployeesContainer/constants";

const initialValues = {
  firstName: "",
  lastName: "",
  patronymic: "",
  gender: "",
  birthDay: new Date(),
  age: "",
  maritalStatus: "",
  fin: "",
  IDNumber: "",
  company: "",
  department: "",
  positionStatus: "",
  position: "",
  citizenship: "",
  nationality: "",
  education: "",
  email: "",
  staff: "",
  workplace: "",
  mobile: "",
  corporateNumber: "",
  internalNumber: "",
  homeNumber: "",
  relatives: "",
  relativesPhoneNumber: "",
  workingTime: "",
  weeklyWorkingHours: "",
  disabilities: "",
  insurance: "",
};

export const NewEmployeesForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    navigate('/employees/details')
  };

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                  name="lasrstName"
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
                  <FormControlLabel value="Ki??i" control={<Radio />} label="Ki??i" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qad??n" control={<Radio />} label="Qad??n" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormControl fullWidth>
                    <Field
                      name="birthDay"
                      component={DatePicker}
                      label="Do??um tarixi"
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
                  label="Ya??"
                  name="age"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="marital-status">Ail?? v??ziyy??ti</FormLabel>
                <Field
                  fullWidth
                  name="maritalStatus"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Evli" control={<Radio />} label="Evli" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qad??n" control={<Radio />} label="Qad??n" sx={{ color: '#666666' }} />
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
                  label="????xsiyy??t v??siq??nin seriya n??mr??si"
                  name="IDNumber"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="??irk??t"
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
                    return <MuiTextField {...params} label="????b??" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="position-status">V??zif?? t??snifat??</FormLabel>
                <Field
                  fullWidth
                  name="positionStatus"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="F??hl??" control={<Radio />} label="F??hl??" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qulluq??u" control={<Radio />} label="Qulluq??u" sx={{ color: '#666666' }} />
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
                    return <MuiTextField {...params} label="V??zif??" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="V??t??nda??l??q"
                  name="citizenship"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Milliyy??ti"
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
                    return <MuiTextField {...params} label="T??hsil" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="E-??nvan"
                  name="email"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="staff">??tat tutumu</FormLabel>
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
                <FormLabel id="workplace">I?? yeri</FormLabel>
                <Field
                  fullWidth
                  name="workplace"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="??sas" control={<Radio />} label="??sas" sx={{ color: '#666666' }} />
                  <FormControlLabel value="??lav??" control={<Radio />} label="??lav??" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Mobil n??mr??"
                  name="mobile"
                />
                <FormHelperText id="outlined-weight-helper-text">+994 00 000 00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Korporativ n??mr??"
                  name="corporateNumber"
                />
                <FormHelperText id="outlined-weight-helper-text">+994 00 000 00 00</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Daxili n??mr??"
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
                    return <MuiTextField {...params} label="Yax??n qohumun kimliyi" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Yax??n qohum(mob)"
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
                    return <MuiTextField {...params} label="???? vaxt??" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="H??ft??lik i?? saat??"
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
                    return <MuiTextField {...params} label="??lillik" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Sosial s????orta n??mr??si"
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