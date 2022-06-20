import { Field, Formik, Form} from "formik";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  Grid,
  TextField as MuiTextField,
} from "@mui/material";
import { Autocomplete } from 'formik-mui'
import { SubmitButton, CloseButton } from 'components/Buttons';
import * as Yup from "yup";
import { TextFieldWrapper } from "./TextFieldWrapper";


const initialValues = {
  type: "",
  document: "",
  note: ""
}
const type = [
  'CV',
  'Sertifikat',
  'Foto şəkil',
  'Şəxsi sənəd',
  'Profil şəkli'
]

const fileFormats = ["application/pdf"];

const validationSchema = Yup.object({
    type: Yup.string().required("Mütləq doldurulmalıdır!"),
    document: Yup.string().required("Mütləq doldurulmalıdır!"),
    note: Yup.string().required("Mütləq doldurulmalıdır!")
});

const CustomFileInput = ({onClick, fileName}) => <AttachFileIcon onClick={onClick} />

export const AddDocumentDialog = ({ add, setAdd }) => {

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
            Yeni sənəd
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Box>
              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
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
                    label="Sənəd yüklə*"
                    name="document"
                    type="file"
                    component={CustomFileInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper
                    label="Qeyd"
                    name="note"
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions sx={{ padding: "16px" }}>
            <CloseButton onClick={handleClose} />
            <SubmitButton text="Yarat" onClick={handleClose} />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};