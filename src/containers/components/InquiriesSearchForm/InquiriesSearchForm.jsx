import { Box, Divider, Grid, MenuItem, TextField as MuiTextField } from "@mui/material";
import { Button, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: "column",
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    marginBottom: "16px"
  },
  upBox: {
    padding: "16px"
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "12px 16px"
  },
})

const position = [
  { value: "COO", label: "COO" },
  { value: "Aparıcı", label: "Aparıcı" },
  { value: "Menecer", label: "Menecer" },
  { value: "Supervisor", label: "Supervisor" },
];

const queryStatus = [
  { value: "Təsdiqləndi", label: "Təsdiqləndi" },
  { value: "Gözləmədədir", label: "Gözləmədədir" },
  { value: "Ləğv olundu", label: "Ləğv olundu" },
];

const initialValues = {
  nameSurname: "",
  department: "",
  position: "",
  queryStatus: "",
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const InquiriesSearchForm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.upBox}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ad Soyad"
                  name="nameSurname"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Departament"
                  name="department"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  name="position"
                  select
                  component={TextField}
                  label="Vəzifə"
                >
                  {position.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  name="queryStatus"
                  select
                  component={TextField}
                  label="Sorğunun statusu"
                >
                  {queryStatus.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box className={classes.btnBox}>
            <CloseButton type="reset" text="Təmizlə" />
            <Button type="submit" text="Axtar" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};