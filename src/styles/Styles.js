import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  breadcrumbBar: {
    borderBottom: "1px solid #E0E0E0",
    padding: "12px 16px"
  },
  container: {
    padding: "16px 8%",
  },
  dataContainer: {
    display: "flex",
    gap: "16px",
    flexDirection: "column"
  },
  formBox: {
    border: "1px solid #E0E0E0",
    borderRadius: "4px",
  },
  button: {
    textAlign: "end"
  }
});