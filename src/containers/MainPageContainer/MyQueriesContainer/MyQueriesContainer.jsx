import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import { Table } from "components/Table";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MAINPAGE_ACTIONS, MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  head: {
    padding: "16px",
    color: "#424242",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    height: "60px",
  },
  mainCard: {
    marginBottom: "16px",
    boxShadow: "none",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
  },
});

export const MyQueriesContainer = () => {
  const classes = useStyles();
  const thead = [
    {
      key: "type",
      label: "Tipi",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "date",
      label: "Tarixi",
    },
  ];

  const dispatch = useDispatch();
  const myQueriesData = useSelector(MAINPAGE_SELECTORS.getMyQueiresData);
  const myQueriesLoading = useSelector(MAINPAGE_SELECTORS.getMyQueiresLoading);
  const handleClick = () => dispatch(MAINPAGE_ACTIONS.fetchMyQueries());

  useEffect(() => {
    dispatch(MAINPAGE_ACTIONS.fetchMyQueries());
  }, [dispatch]);

  return (
    <Card className={classes.mainCard}>
      <Card
        sx={{
          backgroundColor: "#F5F5F5",
          borderBottom: "1px solid #E0E0E0",
          boxShadow: "none",
          borderRadius:"8px 8px 0 0"
        }}
      >
        <CardContent className={classes.card}>
          <Typography className={classes.head}>Mənim sorğularım</Typography>
          <Typography fontSize="18px" padding="16px" color="#616161">
            <Tooltip title="Refresh">
              <RefreshIcon onClick={handleClick} sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, boxShadow: "none" }}>
        <CardContent>
          <Table
            tbody={myQueriesData}
            thead={thead}
            loading={myQueriesLoading}
          />
        </CardContent>
      </Card>
    </Card>
  );
};
