import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Grid,
  Chip,
} from "@mui/material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Autocomplete } from 'formik-mui'
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";
import { TOGGLES_ACTIONS, TOGGLES_SELECTORS } from "store/Toggles";
import { TextFieldWrapper } from "./TextFieldWrapper";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers } from "store/Users/users.selectors";
import { updateUser } from "lib/api/users";
import { USERS_ACTIONS } from "store/Users";
import { useEffect, useState } from "react";
import { CustomInput } from "components/Input/CustomInput";
import { InputAutocomplete } from "components/Input/InputAutocomplete";

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const validationSchema = Yup.object({
  username: Yup.string().required("Mütləq doldurulmalıdır!"),
  position: Yup.array().required("Mütləq doldurulmalıdır!")
});


export const EditUserDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState({})

  const users = useSelector(getUsers);
  const open = useSelector(TOGGLES_SELECTORS.getEditDialogToggle)

  const findUser = (id, data) => data.find(user => user._id === id);
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setEditDialog())

  const initialValues = {
    username: selectedUser.username,
    position: selectedUser.position,
  }

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    updateUser(id, values)
      .then(res => {
        navigate('/users')
        dispatch(USERS_ACTIONS.fetchUsers());
      })
    handleClose();
  }

  useEffect(() => {
    if (id) {
      setSelectedUser(findUser(id, users))
    }
  }, [id, users])

  return (
    <Dialog open={open} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: '12px 16px' }}>
            İstifadəçinin redaktəsi
          </DialogTitle>

          <DialogContent dividers sx={{ padding: '16px !important' }}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomInput
                  label="Əməkdaş*"
                  value={selectedUser.fullName}
                  disabled
                  sx={{
                    minWidth: "263px",
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "2px dotted"
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>

                <TextFieldWrapper
                  label="İstifadəçi adı*"
                  name="username"
                  sx={{
                    minWidth: "263px",
                  }}
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

                  )
                  }
                />
                <ErrorMessage name="position" />
              </Grid>

            </Grid>
          </DialogContent>

          <DialogActions sx={{ padding: '12px 16px' }}>
            <CloseButton onClick={handleClose} />
            <SubmitButton text="Yadda saxla" />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};