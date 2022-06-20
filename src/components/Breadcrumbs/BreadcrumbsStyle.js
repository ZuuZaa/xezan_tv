import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  breadcrumbs: {
    fontSize: "14px",
    fontWeight: 500,
    color: '#424242',
  },
  links: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: 'none',
    color: '#424242',
    cursor: "pointer",
    "&:hover" : {
      backgroundColor: "#FCD0FF",
      color: "#9B5AE1"
    }
  },
  text: {
    fontSize: "14px",
    fontWeight: 500,
    color: '#424242',
    padding: "8px 0"
  }
});