import { Table } from "components/Table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { tabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { AddVacationDialog ,EditVacationDialog } from "containers/EmployeesContainer/components/Dialogs";

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
        value: "15",
    },
    {
        key: "usedTotal",
        value: "6",
    },
    {
        key: "rest",
        value: "99",
    }
]

const data = [
    {
        id: '1',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '2',
        rest: '33',
    },
    {
        id: '2',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '2',
        rest: '33',
    },
    {
        id: '3',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '2',
        rest: '33',
    }
]

export const NewEmployeesVacation = () => {
    const classes = useStyles();
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalhOpen, setEditModalhOpen] = useState(false);
    const addHandleClick = () => setAddModalOpen(true);
    const editHandleClick = () => setEditModalhOpen(true)

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
        },
        {
            key: "actions",
            label: "",
            style: { minWidth: 12 },
            render(row) {
                return (
                        <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
                            <Tooltip title="dəyiş">
                                <IconButton vacationİD={row.id} onClick={editHandleClick}>
                                    <EditIcon sx={{ color: 'gray' }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                )
            }
        }
    ]


    return (
        <>
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={tabs} value="vacation" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tfoot={tfoot} add={addHandleClick} title="Əmək məzuniyyətləri" tbody={data} pagination />
            </Box>
            <AddVacationDialog add={addModalOpen} setAdd={setAddModalOpen}/>
            <EditVacationDialog edit={editModalhOpen} setEdit={setEditModalhOpen} />
        </>
    );
}