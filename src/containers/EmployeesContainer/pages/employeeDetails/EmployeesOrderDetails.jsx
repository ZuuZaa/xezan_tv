import { Table } from "components/Table";
import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { detailsTabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";

const thead = [
    {
        key: "type",
        label: "Tipi",
        minWidth: { minWidth: 170 }
    },
    {
        key: "number",
        label: "Nömrəsi",
        minWidth: { minWidth: 170 }
    },
    {
        key: "date",
        label: "Tarixi",
        minWidth: { minWidth: 170 }
    },

    {
        key: "responsible",
        label: "Məsul şəxs",
        minWidth: { minWidth: 170 }
    }
]

const data = [
    {
        id: '1',
        type: 'İşə qəbul edilməsi barədə əmr №',
        number: '1654534',
        date: '25/06/2021',
        responsible: 'İlgar Abbasov',
    }
]

export const EmployeesOrderDetails = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={detailsTabs} value="orderDetails" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tbody={data} pagination />
            </Box>
        </>
    );
}