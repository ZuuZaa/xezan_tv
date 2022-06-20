import { Field, Formik, Form } from "formik";
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  Grid,
  FormControl,
} from "@mui/material";
import { SubmitButton, CloseButton } from 'components/Buttons';
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import * as Yup from "yup";
import { TextFieldWrapper } from "./TextFieldWrapper";


const initialValues = {
  years: "25/06/2020 ~ 25/06/2021",
  main: "33",
  extra: "5",
  used: "12",
  rest: "26"
}

const validationSchema = Yup.object({
  years: Yup.string().required("Mütləq doldurulmalıdır!"),
  main: Yup.string().required("Mütləq doldurulmalıdır!"),
  extra: Yup.string().required("Mütləq doldurulmalıdır!"),
  used: Yup.string().required("Mütləq doldurulmalıdır!"),
  rest: Yup.string().required("Mütləq doldurulmalıdır!")
});

export const EditVacationDialog = ({ vacationId, edit, setEdit }) => {

  const handleClose = () => setEdit(false)
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    handleClose();
  }

  return (
    <Dialog open={edit} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "16px" }}>
          Məzuniyyətin redaktəsi
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Box>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FormControl fullWidth>
                      <Field
                        name="years"
                        component={DatePicker}
                        label="İş ili aralığı*"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />
                    </FormControl>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="Əsas*"
                    name="main"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="Əlavə*"
                    name="extra"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="İstifadə edilmiş*"
                    name="used"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="Qalıq*"
                    name="rest"
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions sx={{ padding: "16px" }}>
            <CloseButton onClick={handleClose} />
            <SubmitButton text="Yenilə" />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};