import { Box, Chip, Divider, Grid } from "@mui/material";
import { Button, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui'
import { makeStyles } from '@mui/styles';
import { CustomInput } from "components/Input/CustomInput";
import { InputAutocomplete } from "components/Input/InputAutocomplete";


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

const roles = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  nameSurname: "",
  username: "",
  position: "",
  roles: [],
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const SearchForm = () => {

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

              <Grid item xs={12} md={6} lg={3}>
                <CustomInput
                  label="Ad Soyad"
                  name="nameSurname"
                />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <CustomInput
                  label="İstifadəçi adı"
                  name="username"
                />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <CustomInput
                  label="Vəzifə"
                  name="position"
                />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Field
                  name="roles"
                  component={Autocomplete}
                  multiple
                  filterSelectedOptions
                  options={roles}
                  getOptionLabel={option => option}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        size="small"
                        variant="filled"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <InputAutocomplete
                      {...params}
                      label="Rollar"
                    />
                  )}
                />
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