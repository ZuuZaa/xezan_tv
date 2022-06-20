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
  years: "",
  main: "",
  extra: "",
  used: "",
  rest: ""
}

const validationSchema = Yup.object({
  years: Yup.string().required("Mütləq doldurulmalıdır!"),
  main: Yup.string().required("Mütləq doldurulmalıdır!"),
  extra: Yup.string().required("Mütləq doldurulmalıdır!"),
  used: Yup.string().required("Mütləq doldurulmalıdır!"),
  rest: Yup.string().required("Mütləq doldurulmalıdır!")
});

export const AddVacationDialog = ({ add, setAdd }) => {

  const handleClose = () => setAdd(false)
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    handleClose();
  }

  return (
    <Dialog open={add} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "16px" }}>
          Yeni məzuniyyət
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
            <SubmitButton text="Yarat" />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};