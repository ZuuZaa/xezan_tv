import { Table } from "components/Table";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Tooltip } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { detailsTabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import {EditContractDialog,DeleteContractDialog} from "containers/EmployeesContainer/components/Dialogs";
import { useState } from "react";

const data = [
    {
        id: '1',
        beginingDate: '25/05/2021',
        endDate: '25/05/2028',
        type: 'Əmək',
        number: '1305202006',
        contractNo: '0533366',
        duration: 'Müddətli',
    }
]

export const EmployeesContractDetails = () => {
    const classes = useStyles();
    const [editModalhOpen, setEditModalhOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const editHandleClick = () => setEditModalhOpen(true)
    const deleteHandleClick = () => setDeleteOpen(true)
    const thead = [
        {
            key: "beginingDate",
            label: "Bağlanma tarixi",
            style: { minWidth: 170 },
        },
        {
            key: "endDate",
            label: "Bitmə tarixi",
            minWidth: { minWidth: 170 }
        },
        {
            key: "type",
            label: "Növü",
            minWidth: { minWidth: 170 }
        },
        {
            key: "number",
            label: "Nömrəsi",
            minWidth: { minWidth: 170 }
        },
        {
            key: "contractNo",
            label: "Əmək kitabçasının №",
            minWidth: { minWidth: 170 }
        },
        {
            key: "duration",
            label: "Müddəti",
            minWidth: { minWidth: 170 }
        },
        {
            key: "icons",
            label: "",
            minWidth: { minWidth: 12 }
        },
        {
            key: "actions",
            label: "",
            style: { minWidth: 12 },
            render(row) {
                return (
    
                    <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
                        <Tooltip title="dəyiş">
                            <IconButton contractId={row.id} onClick={editHandleClick}>
                                <EditIcon sx={{ color: 'gray' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="sil">
                            <IconButton contractId={row.id} onClick={deleteHandleClick}>
                                <DeleteIcon sx={{ color: 'gray' }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
    
                )
            }
        }
    ]
    return (
        <>
            <Box className={classes.breadcrumbBar} sx={{}}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={detailsTabs} value="contractDetails" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tbody={data} pagination />
            </Box>
            <EditContractDialog edit={editModalhOpen} setEdit={setEditModalhOpen} />
            <DeleteContractDialog del={deleteOpen} setDelete={setDeleteOpen} />
        </>
    );
}