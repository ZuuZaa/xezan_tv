import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  tcontainer: {
    width: "100%",
    boxShadow: "none",
    border: "1px solid #E0E0E0"
  },
  extraHeadContainer: {
    display: 'flex', 
    justifyContent: 'space-between', 
    backgroundColor:'#F5F5F5', 
    borderBottom: "1px solid #E0E0E0", 
    padding: "16px"
  },
  extraHeadTitle:{
    fontSize: 20, 
    fontWeight:'500'
  },
  thead: {
    backgroundColor: '#F5F5F5',
    height: "48px",
    padding: "0 16px",
    fontSize: "12px",
    fontWeight: "700",
  },
  tfoot: {
    height: "48px",
    padding: "0 16px",
    fontSize: "12px",
    fontWeight: "700",
    color: "#212121"
  },
  tcell: {
    height: "48px",
    padding: "0 16px",
  },
  data: {
    fontSize: "14px",
    fontWeight: "400"
  },
  iconsBox: {
    display: 'flex',
    alignItems: 'center'
  },
  pagination: {
    fontSize: "12px",
    fontWeight: 400
  },
  noDataContainer: {
    width: '100%',
    height: '126px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  noDataIcon: {
    fontSize: '35px',
    color: "#9B5AE1"
  },
  noDataText: {
    color: "#9B5AE1"
  }
})