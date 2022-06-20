import { Box, Grid, MenuItem } from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { ITSupplyDetailsModal } from "./ITSupplyDetailsModal";
import { useStyles } from "styles/Styles";
import { InfoIcon } from "containers/components/InfoIcon";
import { InfoSection } from "containers/components/InfoSection";
import { CustomInput } from "components/Input/CustomInput";


const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "HR", label: "HR göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "IT göndərməsi" },
]

const initialValues = {
  date: "",
  type: "",
  result: "",
}


export const ITSupplyFormITEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggle = () => dispatch(TOGGLES_ACTIONS.setDetailsDialog())

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    toggle();
  }


  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="three" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <InfoSection name="Lamiə Səyidova Əliağa" />
              <Box className={classes.formBox}>
                <FormHead header="IT göndərməsi"
                  actions={
                    <>
                      <InfoIcon />
                    </>
                  }
                />
                <Grid container spacing={2} padding="16px">
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      disabled
                      name="note"
                      component={TextField}
                      label="Qeyd"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "2px dotted"
                          }
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomInput
                      name="resultText"
                      label="Nəticə mətni"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="result"
                      select
                      InputLabelProps={{
                        variant: 'filled'
                      }}
                      InputProps={{
                        notched: false
                      }}
                      component={TextField}
                      label="Nəticə"
                    >
                      {resultDatas.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                </Grid>
              </Box>

              <Box className={classes.button}>
                <SubmitButton text="Yadda saxla və bitir" />
              </Box>
              <ITSupplyDetailsModal />
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};