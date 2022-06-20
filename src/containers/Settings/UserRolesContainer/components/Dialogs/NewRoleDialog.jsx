import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  Grid,
  TextField as MuiTextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  OutlinedInput,
  Chip
} from "@mui/material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import { makeStyles } from "@mui/styles";
import { USER_ROLES_ACTIONS } from "store/UserRoles";
import { postNewUserRoles } from "lib/api/userRoles";
import { CustomInput } from "components/Input/CustomInput";
import { InputAutocomplete } from "components/Input/InputAutocomplete";

const useStyle = makeStyles({
  dialogTitle: {
    padding: "16px 20px",
    fontWeight: 400,
  },
  dialogContent: {
    padding: "16px",
  },

})

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  isStatic: "",
  name: "",
  power: "",
  authority: [],
  description: ""
}


export const NewRoleDialog = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const open = useSelector(TOGGLES_SELECTORS.getAddNewToggle)
  const close = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    postNewUserRoles(values)
      .then(res => {
        dispatch(USER_ROLES_ACTIONS.fetchUserRoles());
      })
    close();
  }

  return (
    <Dialog open={open} onClose={close}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle className={classes.dialogTitle}>
            Yeni rol
          </DialogTitle>

          <DialogContent dividers className={classes.dialogContent}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormLabel id="isStatic">Rol statikdir?</FormLabel>
                  <Field as={RadioGroup}
                    row
                    name="isStatic"
                  >
                    <FormControlLabel value="Hə" control={<Radio />} label="Hə" />
                    <FormControlLabel value="Yox" control={<Radio />} label="Yox" />
                  </Field>
                </Grid>

                <Grid item xs={12}>
                  <CustomInput
                    label="Adı"
                    name="name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomInput
                    label="Fərqləndirici ad"
                    name="power"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="authority"
                    component={Autocomplete}
                    options={positions}
                    filterSelectedOptions
                    getOptionLabel={option => option}
                    multiple
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
                        label="Səlahiyyətlər" />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomInput
                    label="Təsviri"
                    name="description"
                  />
                </Grid>

              </Grid>
            </Box>
          </DialogContent>

          <DialogActions className={classes.dialogTitle}>
            <CloseButton onClick={close} />
            <SubmitButton text="Yarat" />
          </DialogActions>
        </Form>

      </Formik>
    </Dialog>
  );
};