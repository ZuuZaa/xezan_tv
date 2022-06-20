import { Alert, Box, Button, Snackbar } from "@mui/material";
import { ReactComponent as Logo } from "assets/logo.svg";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useStyles } from './Styles';
import { LS } from 'utils';
import { useNavigate } from "react-router-dom";
import { appConfig } from "configs";
import CloseIcon from '@mui/icons-material/Close';
import { Warning } from "@mui/icons-material";


export const LoginLayout = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [snackBar, setSnackBar] = useState(false);
   
    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleCloseSnackbar = () => {
        setSnackBar(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const loginFormOnSubmit = event => {
        event.preventDefault();
        if (values.username === "admin" && values.password === "admin") {
            LS.setItemLocalStorage(appConfig.userData, JSON.stringify(values));
            navigate("/", { replace: true });
        } else {
            setError(true);
            setSnackBar(true);
        }
    }

    const action = (

        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    console.log(error)
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackBar}
                onClose={handleCloseSnackbar}
                key='error-alert'
                action={action}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    icon={<Warning fontSize="inherit" />}
                    variant="filled"
                    severity="error">
                    İstifadəçi adı və ya şifrə yanlış daxil edilib
                </Alert>
            </Snackbar>
            <Box className={classes.loginContainer}>
                <Box className={classes.logoWrapper}>
                    <Logo />
                </Box>
                <Box className={classes.formWrapper}>
                    <Box
                        component="form"
                        onSubmit={loginFormOnSubmit}
                        noValidate
                        autoComplete="off"
                        className={classes.form}>
                        <FormControl className={classes.formItem} error={error} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">İstifadəçi adı</InputLabel>
                            <OutlinedInput
                                id="filled-adornment-text"
                                type='text'
                                value={values.username}
                                onChange={handleChange('username')}
                                sx={error && { backgroundColor: '#FFEEEF' }}
                            />
                        </FormControl>
                        <FormControl className={classes.formItem} error={error} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Şifrə</InputLabel>
                            <OutlinedInput
                                id="filled-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                sx={error && { backgroundColor: '#FFEEEF' }}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            sx={error && { color: '#D32F2F' }}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button variant="contained" type='submit' className={classes.loginButton}>Daxil ol</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
