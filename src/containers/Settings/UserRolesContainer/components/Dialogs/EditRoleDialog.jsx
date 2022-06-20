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
import { updateUserRoles } from "lib/api/userRoles";
import { useNavigate, useParams } from "react-router-dom";
import { getUserRoles } from "store/UserRoles/userRoles.selectors";
import { USER_ROLES_ACTIONS } from "store/UserRoles";
import { useEffect, useState } from "react";
import { CustomInput } from "components/Input/CustomInput";
import { InputAutocomplete } from "components/Input/InputAutocomplete";

const useStyle = makeStyles({
  dialogTitle: {
    padding: "16px 20px",
    fontWeight: 400,
  },
  dialogContent: {
    padding: "16px",
  }
})

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];


export const EditRoleDialog = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedUserRole, setSelectedUserRole] = useState({});

  const userRoles = useSelector(getUserRoles);
  const open = useSelector(TOGGLES_SELECTORS.getEditDialogToggle)

  const findUserRole = (id, data) => data.find(userRole => userRole._id === id);
  const close = () => dispatch(TOGGLES_ACTIONS.setEditDialog());

  const initialValues = {
    name: selectedUserRole.name,
    authority: selectedUserRole.authority,
    description: selectedUserRole.description
  }

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    close();
    updateUserRoles(id, values)
      .then(res => {
        navigate('/userroles')
        dispatch(USER_ROLES_ACTIONS.fetchUserRoles());
      })
  }

  useEffect(() => {
    if (id) {
      setSelectedUserRole(findUserRole(id, userRoles))
    }
  }, [id, userRoles])

  return (
    <Dialog open={open} onClose={close}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle className={classes.dialogTitle}>
            Rolun redaktəsi
          </DialogTitle>

          <DialogContent dividers className={classes.dialogContent}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormLabel id="isStatic">Rol statikdir?</FormLabel>
                  <Field as={RadioGroup}
                    row
                    name="isStatic"
                    value={selectedUserRole.isStatic}
                  >
                    <FormControlLabel disabled value="Hə" control={<Radio />} label="Hə" />
                    <FormControlLabel disabled value="Yox" control={<Radio />} label="Yox" />
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
                    disabled
                    label="Fərqləndirici ad"
                    name="power"
                    value={selectedUserRole.power}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "2px dotted rgba(0, 0, 0, 0.35)"
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    multiple
                    name="authority"
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
            <SubmitButton text="Yadda saxla" />
          </DialogActions>
        </Form>

      </Formik>
    </Dialog>
  );
};