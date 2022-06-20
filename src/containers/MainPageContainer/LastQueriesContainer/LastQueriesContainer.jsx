import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect } from "react";
import { MAINPAGE_ACTIONS, MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { LastQueriesTable } from "./LastQueriesTable";
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

export const LastQueriesContainer = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const lastQueriesData = useSelector(MAINPAGE_SELECTORS.getLastQueriesData);
  const lastQueriesLoading = useSelector(
    MAINPAGE_SELECTORS.getLastQueriesLoading
  );
  const handleClick = () => dispatch(MAINPAGE_ACTIONS.fetchLastQueries());

  useEffect(() => {
    dispatch(MAINPAGE_ACTIONS.fetchLastQueries());
  }, [dispatch]);

  return (
    <Card className={classes.mainCard}>
      <Card
        sx={{
          backgroundColor: "#F5F5F5",
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
          borderRadius:"8px 8px 0 0"
        }}
      >
        <CardContent className={classes.card}>
          <Typography className={classes.head}>Son sorğular</Typography>
          <Typography fontSize="18px" padding="16px" color="#616161">
            <Tooltip title="Refresh">
              <RefreshIcon onClick={handleClick} sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, boxShadow: "none" }}>
        <CardContent>
          <LastQueriesTable
            data={lastQueriesData}
            loading={lastQueriesLoading}
          />
        </CardContent>
      </Card>
    </Card>
  );
};
