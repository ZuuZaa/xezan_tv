import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    loginContainer: {
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: "center", 
        backgroundColor: '#E5E5E5' 
    },
    logoWrapper: {
        backgroundColor: "#9B5AE1", 
        height:420, 
        width: 442, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: "center", 
        borderRadius: '12px 0 0 12px',
        '@media (max-width: 900px)' : {
            display: 'none'
          }
    },
    formWrapper:{
        height: 420,
        width: 442, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius:'0 12px 12px 0',
        '@media (max-width: 900px)' : {
            borderRadius:'12px '
          }
    },
    form: {
        display: 'flex', 
        flexDirection: 'column',
    },
    formItem: {
        height: 70,
    },
    loginButton: {
        width: 322,
        height: 53,
    }
})