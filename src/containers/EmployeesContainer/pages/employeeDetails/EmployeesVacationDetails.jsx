import { Table } from "components/Table";
import { Box} from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { detailsTabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";

const thead = [
    {
        key: "year",
        label: "İş ili",
        style: { minWidth: 170 },
    },
    {
        key: "main",
        label: "Əsas",
        minWidth: { minWidth: 170 }
    },
    {
        key: "extra",
        label: "Əlavə",
        minWidth: { minWidth: 170 }
    },
    {
        key: "used",
        label: "İstifadə edilmiş",
        minWidth: { minWidth: 170 }
    },
    {
        key: "rest",
        label: "Qalıq",
        minWidth: { minWidth: 170 }
    }
]
const tfoot = [
    {
        key: "total",
        value: "Total",
    },
    {
        key: "mainTotal",
        value: "90",
    },
    {
        key: "extraTotal",
        value: "10",
    },
    {
        key: "usedTotal",
        value: "7",
    },
    {
        key: "rest",
        value: "93",
    }
]

const data = [
    {
        id: '1',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '3',
        used: '2',
        rest: '31',
    },
    {
        id: '2',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '3',
        rest: '32',
    },
    {
        id: '3',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '2',
        used: '2',
        rest: '30',
    }
]

export const EmployeesVacationDetails = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={detailsTabs} value="vacationDetails" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tfoot={tfoot} tbody={data} pagination />
            </Box>
        </>
    );
}