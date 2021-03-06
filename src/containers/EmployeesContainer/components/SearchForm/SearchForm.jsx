import {
  Box,
  Divider,
  Grid,
  TextField as MuiTextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel
} from "@mui/material";
import { Button, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui'
import { makeStyles } from '@mui/styles';
import { useRef } from "react";
import { times, departments, disabilities } from '../../constants';

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

const initialValues = {
  fullName: "",
  departments: "",
  ageFrom: "",
  ageTo: "",
  times: "",
  disabilities: "",
  position: "",
  staffCapacity: "",
  status: "",
  workplace: "",
  gender: "",
}



const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const SearchForm = () => {

  const classes = useStyles();
  const inputRef = useRef(null);

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
                  label="Ad Soyad Ata"
                  name="fullName"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="departments"
                  name="departments"
                  component={Autocomplete}
                  options={departments}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  ref={inputRef}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="????b??" />;
                  }}
                />
              </Grid>
              <Grid item sm={6} lg={2}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ya??(dan)"
                  name="ageFrom"
                  type="number"
                />
              </Grid>
              <Grid item sm={6} lg={2}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ya??(a)"
                  name="ageTo"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="times"
                  name="times"
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
                  label="disabilities"
                  name="disabilities"
                  component={Autocomplete}
                  options={disabilities}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="??lilliyi" />;
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="position">V??zif?? t??snifat??</FormLabel>
                <Field
                  fullWidth
                  name="position"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Qulluqcu" control={<Radio />} label="Qulluqcu" sx={{ color: '#666666' }} />
                  <FormControlLabel value="F??hl??" control={<Radio />} label="F??hl??" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Ham??s??" control={<Radio />} label="Ham??s??" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="staff-capacity">??tat tutumu</FormLabel>
                <Field
                  fullWidth
                  name="staffCapacity"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Tam" control={<Radio />} label="Tam" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Yar??m" control={<Radio />} label="Yar??m" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Ham??s??" control={<Radio />} label="Ham??s??" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="status">Statusu</FormLabel>
                <Field
                  fullWidth
                  name="status"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Aktiv" control={<Radio />} label="Aktiv" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Arxiv" control={<Radio />} label="Arxiv" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Ham??s??" control={<Radio />} label="Ham??s??" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="workplace">???? yeri</FormLabel>
                <Field
                  fullWidth
                  name="workplace"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="??sas" control={<Radio />} label="??sas" sx={{ color: '#666666' }} />
                  <FormControlLabel value="??lav??" control={<Radio />} label="??lav??" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Ham??s??" control={<Radio />} label="Ham??s??" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormLabel id="gender">Cinsiyy??t</FormLabel>
                <Field
                  fullWidth
                  name="gender"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Ki??i" control={<Radio />} label="Ki??i" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Qad??n" control={<Radio />} label="Qad??n" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Ham??s??" control={<Radio />} label="Ham??s??" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
            </Grid>

          </Box>
          <Divider />
          <Box className={classes.btnBox}>
            <CloseButton type="reset" text="T??mizl??" />
            <Button type="submit" text="Axtar" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};


