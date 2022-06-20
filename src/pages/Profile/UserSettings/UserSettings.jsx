import { Typography, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ResultTable } from "containers/components/ResultTable/ResultTable";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    gap: "16px",
    width: "100%",
    justifyContent:"center",
    '@media (max-width: 960px)' : {
      flexDirection: 'column',

    }
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    padding:"0 20px",
    width:"35%",
    '@media(max-width:960px)':{
      width:"100%",
      height:"200px"
    }
  },
  tableBox: {
    padding: "4px 16px",
    gap: "16px",
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    width:"65%",
    '@media(max-width:960px)':{
      width:"100%"
    }
  },
});

const data = [
  {
    name: "İstifadəçi adı",
    value: "xeyalea",
  },
  {
    name:"Elektron poçt",
    value:"xeyalea@xezantv.az"
  },
  {
    name: "Əlaqə nömrəsi",
    value: "994505005050",
  },
  {
    name: "İstifadəçi rolları",
    value: "Admin, Reporter",
  },
];
export const UserSettings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.boxContent}>
        <AccountCircleIcon sx={{ fontSize: "80px", color: "gray" }} />
        <Typography fontSize="16px" color="#424242" textAlign="center">
          Xəyalə Aslanova Əliağa
        </Typography>
        <Typography color="#BDBDBD">Aparıcı</Typography>
      </Box>
      <Box className={classes.tableBox}>
        <ResultTable data={data} />
      </Box>
    </Box>
  );
};
