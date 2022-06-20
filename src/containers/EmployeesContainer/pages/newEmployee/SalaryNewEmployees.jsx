// import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  Grid,
  TextField as MuiTextField,
  FormHelperText
} from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { Field, Form, Formik } from "formik";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useStyles } from "styles/Styles";
import { tabs } from "containers/EmployeesContainer/constants";

const initialValues = {
    experienceBefore: "",
    beginingDate: "",
    experience: "",
    grossSalary: "",
    netSalary: "",
};

export const NewEmployeesSalary = () => {
  const classes = useStyles();
  // const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    // navigate("/employees/new/saved");
  };

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="salary" />
          <Box sx={{ padding: 2, margin: 2, border: "1px solid #C4C4C4", borderRadius: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Əvvəlki iş stajı"
                  name="experienceBefore"
                />
                <FormHelperText id="outlined-weight-helper-text">gün/ay/il</FormHelperText>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormControl fullWidth>
                    <Field
                      name="beginingDate"
                      component={DatePicker}
                      label="Başlama tarixi"
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
                  label="Ümumi iş stajı"
                  name="experience"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Əmək haqqı gross(AZN)"
                  name="grossSalary"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Əmək Haqqı net(AZN)"
                  name="netSalary"
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