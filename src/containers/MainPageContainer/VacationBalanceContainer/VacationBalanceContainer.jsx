import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect } from "react";
import { MAINPAGE_ACTIONS, MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { VacationBalanceTable } from "./VacationBalanceTable";
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

export const VacationBalanceContainer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const VacationBalanceData = useSelector(
    MAINPAGE_SELECTORS.getVacationBalanceData
  );
  const VacationBalanceLoading = useSelector(
    MAINPAGE_SELECTORS.getVacationBalanceLoading
  );
  const handleClick = () => dispatch(MAINPAGE_ACTIONS.fetchVacationBalance());

  useEffect(() => {
    dispatch(MAINPAGE_ACTIONS.fetchVacationBalance());
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
          <Typography className={classes.head}>Məzuniyyət balansı</Typography>
          <Typography fontSize="18px" padding="16px" color="#616161">
            <Tooltip title="Refresh">
              <RefreshIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, boxShadow: "none" }}>
        <CardContent>
          <VacationBalanceTable
            data={VacationBalanceData}
            loading={VacationBalanceLoading}
          />
        </CardContent>
      </Card>
    </Card>
  );
};
