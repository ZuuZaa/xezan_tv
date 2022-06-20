import { Table } from "components/Table";
import { Box, IconButton, Tooltip} from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { tabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import {AddOrderDialog,EditOrderDialog,DeleteOrderDialog} from "containers/EmployeesContainer/components/Dialogs";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
 

const data = [
    {
        id: '1',
        type: 'İşə qəbul edilməsi barədə əmr №',
        number: '1654534',
        date: '25/06/2021',
        responsible: 'İlgar Abbasov',
    }
]

export const NewEmployeesOrder = () => {
    const classes = useStyles();
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalhOpen, setEditModalhOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const addHandleClick = () => setAddModalOpen(true);
    const editHandleClick = () => setEditModalhOpen(true)
    const deleteHandleClick = () => setDeleteOpen(true)

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
                            <IconButton orderİD={row.id} onClick={editHandleClick}>
                                <EditIcon sx={{ color: 'gray' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="sil">
                            <IconButton orderİD={row.id} onClick={deleteHandleClick}>
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
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={tabs} value="order" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tbody={data} add={addHandleClick} title="Əmr" pagination />
            </Box>
            <AddOrderDialog add={addModalOpen} setAdd={setAddModalOpen}/>
            <EditOrderDialog edit={editModalhOpen} setEdit={setEditModalhOpen} />
            <DeleteOrderDialog del={deleteOpen} setDelete={setDeleteOpen} />
        </>
    );
}