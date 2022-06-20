import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  navBar: { flexGrow: 1 },
  appBar: {
    backgroundColor: "#fff",
    color: "#424242",
    height: 56,
    justifyContent: "center",
    boxShadow: "none",
    borderBottom: "1px solid #E0E0E0",
  },
  toolBar: { 
    justifyContent: "space-between",

   },
  profileContainer: { display: "flex", alignItems: "center" },
  userName: { fontSize: 14 },
})