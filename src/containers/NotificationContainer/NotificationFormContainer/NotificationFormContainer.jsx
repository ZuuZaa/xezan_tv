import {
  Divider,
  MenuItem,
  TextField as MuiTextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Button } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Button as AButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    borderRadius: "4px",
    border: "none",
  },
  upBox: {
    padding: "16px",
  },
  btnBox: {
    width: "95%",
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
  btn: {
    border: "1px solid green",
    color: "green",
    padding: 8,
  },
  card: {
    width: "90%",
    margin: "auto",
    boxShadow: "none",
    border: "1px solid #E0E0E0 ",
    borderRadius: "4px",
  },
  card2: {
    backgroundColor: "#F5F5F5",
    boxShadow: "none",
    borderRadius: "4px 4px 0 0",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    height: "60px",
    borderBottom: "1px solid #E0E0E0",
  },
});

const operation = [{ value: "Paylaş", label: "Paylaş" }];

const initialValues = {
  name: "",
  description: "",
  operation: "",
};

const onSubmit = (values, { resetForm }) => {
  resetForm();
};

export const NotificationFormContainer = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => navigate("/notificationView");
  const saveClick = () => navigate("/notification");

  return (
    <Box className={classes.container}>
      <Card sx={{ boxShadow: "none" }}>
        <Typography className={classes.header}>
          Elanın formalaşdırılması
        </Typography>
        <Card className={classes.card}>
          <Card className={classes.card2}>
            <CardContent className={classes.CardContent}>
              <Typography color="#424242" padding="16px" fontSize="16px">
                Elanın formalaşdırılması
              </Typography>
            </CardContent>
          </Card>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <Box className={classes.upBox}>
                <Field
                  sx={{ marginBottom: "8px" }}
                  fullWidth
                  as={MuiTextField}
                  label="Ad "
                  name="name"
                />
                <Field
                  sx={{ marginBottom: "8px" }}
                  fullWidth
                  as={MuiTextField}
                  label="Təsviri"
                  name="description"
                />
                <Field
                  fullWidth
                  name="operation"
                  select
                  component={TextField}
                  label="Əməliyyatlar"
                >
                  {operation.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Divider />
            </Form>
          </Formik>
        </Card>
        <Box className={classes.btnBox}>
          <AButton onClick={saveClick} className={classes.btn}>
            Yadda Saxla
          </AButton>
          <Button
            onClick={handleClick}
            color="success"
            type="submit"
            text="Sonlandır"
          />
        </Box>
      </Card>
    </Box>
  );
};
