import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  IconButton,
  InputAdornment,
  Grid,
  Chip,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import * as Yup from "yup";
import { TextFieldWrapper } from "./TextFieldWrapper";
import { USERS_ACTIONS } from "store/Users";
import { postNewUser } from "lib/api/users";
import { InputAutocomplete } from "components/Input/InputAutocomplete";

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  fullName: "",
  username: "",
  position: [],
  password: "",
  passwordRepeat: "",
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Mütləq doldurulmalıdır!"),
  username: Yup.string().required("Mütləq doldurulmalıdır!"),
  position: Yup.array().required("Mütləq doldurulmalıdır!"),
  password: Yup.string().required("Mütləq doldurulmalıdır!"),
  passwordRepeat: Yup.string().required("Mütləq doldurulmalıdır!"),
});


export const AddNewUserDialog = () => {

  const dispatch = useDispatch();
  const passwordHidden = useSelector(TOGGLES_SELECTORS.getPasswordHidden);
  const handlePasswordHidden = () => dispatch(TOGGLES_ACTIONS.setPasswordHidden());
  const passwordRepeatHidden = useSelector(TOGGLES_SELECTORS.getPasswordRepeatHidden);
  const handlePasswordRepeatHidden = () => dispatch(TOGGLES_ACTIONS.setPasswordRepeatHidden());

  const open = useSelector(TOGGLES_SELECTORS.getAddNewToggle)
  const close = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    close()
    postNewUser(values).then(res => {
      dispatch(USERS_ACTIONS.fetchUsers());
    })
  }

  return (
    <Dialog open={open} onClose={close}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "12px 16px" }}>
            Yeni İstifadəçi
          </DialogTitle>

          <DialogContent dividers sx={{ padding: "16px !important" }}>
            <Box>
              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    required
                    label="Əməkdaş"
                    name="fullName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    required
                    label="İstifadəçi adı"
                    name="username"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    multiple
                    name="position"
                    component={Autocomplete}
                    options={positions}
                    filterSelectedOptions
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
                        label="Rollar*"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    type={passwordHidden ? 'password' : 'text'}
                    label="Şifrə"
                    required
                    name="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePasswordHidden}
                            edge="end"
                          >
                            {passwordHidden ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    type={passwordRepeatHidden ? 'password' : 'text'}
                    label="Şifrənin təkrarı"
                    required
                    name="passwordRepeat"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePasswordRepeatHidden}
                            edge="end"
                          >
                            {passwordRepeatHidden ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>

          <DialogActions sx={{ padding: "12px 16px" }}>
            <CloseButton onClick={close} />
            <SubmitButton text="Yarat" />
          </DialogActions>
        </Form>

      </Formik>
    </Dialog>
  );
};