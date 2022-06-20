import { Field, Formik, Form } from "formik";
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  Grid,
  TextField as MuiTextField,
  FormControl,
} from "@mui/material";
import { Autocomplete } from 'formik-mui'
import { SubmitButton, CloseButton } from 'components/Buttons';
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import * as Yup from "yup";
import { TextFieldWrapper } from "./TextFieldWrapper";


const initialValues = {
  date: "25/06/2020",
  type: "İşə qəbul edilməsi barədə",
  number: "1654534"
}
const type = [
  'İşə qəbul edilməsi barədə',
  'İşçinin mükafatlandırılması haqqında',
  'Məzuniyyətin verilməsi barədə',
  'Vəzifə maaşının artırılması barədə',
  'Ezamiyyə əmri',
  'Əmək müqaviləsinə xitam verilməsi barədə',
  'Başqa işə keçirilmə əmri',
  'İnzibati tənbeh əmri',
  'Təhsil məzuniyyəti',
  'Sosial məzuniyyət',
  'Öz hesabına məzuniyyət'
]

const validationSchema = Yup.object({
  date: Yup.string().required("Mütləq doldurulmalıdır!"),
  type: Yup.string().required("Mütləq doldurulmalıdır!"),
  number: Yup.string().required("Mütləq doldurulmalıdır!")
});

export const EditOrderDialog = ({orderId, edit, setEdit }) => {

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
          Əmrin redaktəsi
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Box>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="type"
                    component={Autocomplete}
                    label="type"
                    options={type}
                    filterSelectedOptions
                    getOptionLabel={option => option}
                    renderInput={(params) => {
                      return <MuiTextField {...params} label="Tipi*" />;
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="Nömrəsi*"
                    name="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FormControl fullWidth>
                      <Field
                        name="date"
                        component={DatePicker}
                        label="Tarixi*"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />
                    </FormControl>
                  </LocalizationProvider>
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