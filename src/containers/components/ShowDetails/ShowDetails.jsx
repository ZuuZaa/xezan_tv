import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormHead } from "../FormHead";
import { InfoSection } from "../InfoSection";
import { ResultTable } from "../ResultTable";

const useStyles = makeStyles({
  container: {
    display: "flex",
    gap: "16px",
    flexDirection: "column"
  },
  formBox: {
    border: "1px solid #E0E0E0", 
    borderRadius: "4px"
  },
  tableBox: {
    padding: "0 16px"
  }
});

export const ShowDetails = ({ header, data, name, actions=<></> }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <InfoSection name={name} />
      <Box 
      className={classes.formBox}
      >
        <FormHead
          header={header}
          actions={actions}
        />
        <Box className={classes.tableBox}>
          <ResultTable data={data} />
        </Box>
      </Box>
    </Box>
  );
}