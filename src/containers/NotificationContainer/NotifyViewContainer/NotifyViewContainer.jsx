import {
  Divider,
  TextField as MuiTextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    borderRadius: "4px",
    border: "none",
  },
  upBox: {
    padding: "16px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "12px 16px",
  },
  header: {
    fontSize: "14px",
    color: "#9B5AE1",
    backgroundColor: "#F5F5F5",
    height: "48px",
    marginBottom: "10px",
    padding: "16px",
    fontWeight: "bold",
  },
  field: {
    marginBottom: "8px",
    border: "1px dashed rgba(0, 0, 0, 0.42)",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    height: "60px",
  },
});

const initialValues = {
  name: "",
  description: "",
  operation: "",
};

const onSubmit = (values, { resetForm }) => {
  resetForm();
};

export const NotifyViewContainer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Card sx={{ boxShadow: "none" }}>
        <Typography className={classes.header}>
          Elanın formalaşdırılması
        </Typography>
        <Card sx={{ width: "90%", margin: "auto" }}>
          <Card
            sx={{
              backgroundColor: "#F5F5F5",
              boxShadow: "none",
              borderRadius: "4px 4px 0 0",
            }}
          >
            <CardContent className={classes.cardContent}>
              <Typography color="#424242" padding="16px" fontSize="16px">
                Elanın formalaşdırılması
              </Typography>
            </CardContent>
          </Card>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <Box className={classes.upBox}>
                <Field
                  className={classes.field}
                  fullWidth
                  disabled
                  as={MuiTextField}
                  label="Ad "
                  name="name"
                />
                <Field
                  className={classes.field}
                  fullWidth
                  disabled
                  as={MuiTextField}
                  label="Təsviri"
                  name="description"
                />
                <Field
                  className={classes.field}
                  fullWidth
                  disabled
                  name="operation"
                  as={MuiTextField}
                  label="Əməliyyatlar"
                ></Field>
              </Box>
              <Divider />
            </Form>
          </Formik>
        </Card>
      </Card>
    </Box>
  );
};
