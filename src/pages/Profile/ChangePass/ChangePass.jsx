import React from "react";
import {
  Card,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { makeStyles } from "@mui/styles";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  typography: {
    fontSize: "14px",
    color: "#757575",
  },
  icon: {
    cursor: "pointer",
    color: "#9E9E9E",
  },
  cardContent: {
    background: "#FAFAFA",
    margin: "10px",
    border: "1px solid #BDBDBD",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    background: "#FAFAFA",
    padding: "0 50px",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    margin: "5px",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    gap: 10,
  },
});
export const ChangePass = () => {
  const [passValue, setPassValue] = useState({
    password: "",
    newPass: "",
    newPassRepeat: "",
    showPassword: false,
    showNewPassword: false,
    showNewPasswordRepeat: false,
  });

  const [message, setMessage] = useState({
    passwordMessage: "",
    newPasswordMessage: "",
    newPasswordRepeatMessage: "",
  });

  const checkValue = () => {
    if (
      passValue.password === "" ||
      passValue.newPass === "" ||
      passValue.newPassRepeat === ""
    ) {
      setMyError((prev) => ({
        ...prev,
        passwordError: true,
      }));
      setMessage((prev) => ({
        ...prev,
        passwordMessage: "Cari şifrəni daxil edin",
      }));
    } else if (
      passValue.password === passValue.newPass ||
      passValue.password === passValue.newPassRepeat
    ) {
      setMyError((prev) => ({
        ...prev,
        newPasswordError: true,
      }));
      setMessage((prev) => ({
        ...prev,
        newPasswordMessage: "Bu şifrə istifadə olunub.",
      }));
    } else if (
      passValue.password !== passValue.newPassRepeat &&
      passValue.newPass !== passValue.newPassRepeat
    ) {
      setMyError((prev) => ({
        ...prev,
        newPasswordRepeatError: true,
      }));
      setMessage((prev) => ({
        ...prev,
        newPasswordRepeatMessage: "Daxil etdiyiniz şifrələr fərqlidir.",
      }));
    } else {
      navigate("/profile/settings");
    }
  };
  const [myError, setMyError] = useState({
    passwordError: false,
    newPasswordError: false,
    newPasswordRepeatError: false,
  });

  const handleChange = (event) => {
    setPassValue({ ...passValue, [event.target.name]: event.target.value });
    setMyError({
      ...myError.passwordError,
      ...myError.newPasswordError,
      ...myError.newPasswordRepeatError,
    });
  };

  const handleClickShowPassword = () => {
    setPassValue({
      ...passValue,
      showPassword: !passValue.showPassword,
    });
  };
  const handleClickShowNewPassword = () => {
    setPassValue({
      ...passValue,
      showNewPassword: !passValue.showNewPassword,
    });
  };
  const handleClickShowNewPasswordRepeat = () => {
    setPassValue({
      ...passValue,
      showNewPasswordRepeat: !passValue.showNewPasswordRepeat,
    });
  };

  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card className={classes.cardContent}>
      <Box
        sx={{
          background: "#FAFAFA",
          borderBottom: "1px solid #BDBDBD",
          display: "flex",
          gap: 2,
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: "rotate(45deg)",
          }}
        >
          <KeyIcon className={classes.icon} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#424242", fontSize: "16px" }}>
            Şifrəni dəyişdir
          </Typography>
          <Typography className={classes.typography}>
            Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
            etməyin yaxşı fikirdir.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.form}>
        <Box>
          <FormControl
            sx={{ margin: "5px" }}
            fullWidth
            error={myError.passwordError}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-password1">Cari şifrə</InputLabel>
            <OutlinedInput
              aria-describedby="outlined-password1-error"
              type={passValue.showPassword ? "text" : "password"}
              value={passValue.password}
              onChange={handleChange}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {passValue.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Cari şifrə"
            />
            {myError.passwordError && (
              <FormHelperText id="outlined-password1-error">
                {message.passwordMessage}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl
            sx={{ margin: "5px" }}
            fullWidth
            error={myError.newPasswordError}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-password2">Yeni şifrə</InputLabel>
            <OutlinedInput
              aria-describedby="outlined-password2-error"
              type={passValue.showNewPassword ? "text" : "password"}
              value={passValue.newPasswordMessage}
              onChange={handleChange}
              name="newPass"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowNewPassword} edge="end">
                    {passValue.showNewPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Yeni şifrə"
            />
            {myError.newPasswordError && (
              <FormHelperText id="outlined-password2-error">
                {message.newPasswordMessage}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            sx={{ margin: "5px" }}
            fullWidth
            error={myError.newPasswordRepeatError}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-password3">
              Yeni şifrənin təkrarı
            </InputLabel>
            <OutlinedInput
              aria-describedby="outlined-password3-error"
              type={passValue.showNewPasswordRepeat ? "text" : "password"}
              value={passValue.newPassRepeat}
              onChange={handleChange}
              name="newPassRepeat"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowNewPasswordRepeat}
                    edge="end"
                  >
                    {passValue.showNewPasswordRepeat ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Yeni şifrənin təkrarı"
            />
            {myError.newPasswordRepeatError && (
              <FormHelperText id="outlined-password3-error">
                {message.newPasswordRepeatMessage}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box className={classes.btn}>
          <SubmitButton onClick={checkValue} />
          <CloseButton
            onClick={() => {
              navigate("/profile/security");
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};
