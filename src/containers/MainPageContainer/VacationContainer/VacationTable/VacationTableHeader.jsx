import { Typography, Avatar} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    avatar: {
      width: 28,
      height: 28,
      display: 'flex',
      marginRight: '10px',
    },
    data: {
      fontSize: "14px",
      fontWeight: "400"
    },
  
  })
  
  export const VacationTableHeader = () => {
  
    const classes = useStyles();
  
    return [
      {
        key: "fullName",
        label: "Adı",
        render: (record) => {
          return (
            <>
              <Avatar
                className={classes.avatar}
                alt={`${record.fullName}`}
                src={record.avatar}
              />
              <Typography
                className={classes.data}
              >
                {record.fullName}
              </Typography>
            </>
          );
        }
      },
      {
        key: "date",
        label: "Tarixi"
      },
      {
        key:"substitute",
        label:"Əvəzedici şəxs"
      }

    ]

}