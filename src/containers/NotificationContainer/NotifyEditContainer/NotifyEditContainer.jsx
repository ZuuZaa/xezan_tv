import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormHead } from "containers/components/FormHead";
import { ResultTable } from "containers/components/ResultTable/ResultTable";
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles({
  container: {
    gap: "16px",
    border:"1px solid #F5F5F5",
    borderRadius:"4px"
  },
  formBox: {
    border: "1px solid #E0E0E0", 
    borderRadius: "4px"
  },
  tableBox: {
    padding: "0 16px",
  }
});


const data=[
  {
    name:"Adı",
    value:"Bayram"
  },
  {
    name:"Təsviri",
    value:"Qurban bayramı"
  }
]

export const NotifyEditContainer = () => {
  const classes = useStyles();

  return (
    <Box sx={{padding:"16px 93px"}}>
    <Box className={classes.container}>
        <FormHead
          header="Elanın təsviri"
          actions={<EditIcon sx={{color:"#0000008A",cursor:"pointer"}}/>}
        />
        <Box className={classes.tableBox}>
          <ResultTable data={data} />
        </Box>
      </Box>
      </Box>
  );
}