import { Table } from "components/Table";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Tooltip } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { tabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { AddDocumentDialog, EditDocumentDialog, DeleteDocumentDialog } from "containers/EmployeesContainer/components/Dialogs";


const data = [
    {
        id: '1',
        type: 'CV',
        document: 'İlgar Abbasov.pdf',
        description: 'Super!!',
    },
    {
        id: '2',
        type: 'Sertifikat',
        document: 'İlgar Abbasov.pdf',
        description: 'Əla!!!',
    },
    {
        id: '3',
        type: 'Foto şəkil',
        document: 'İlgar Abbasov.pdf',
        description: 'Super!!',
    }
]

export const NewEmployeesDocuments = () => {

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
            key: "document",
            label: "Sənəd",
            minWidth: { minWidth: 170 },
            render(row) {
                return (
                    <Box sx={{ backgroundColor: "#E0E0E0", padding: "3px 16px", borderRadius: 5 }}>{row.document}</Box>
                )
            }
        },
        {
            key: "description",
            label: "Təsviri",
            minWidth: { minWidth: 170 }
        },
        {
            key: "actions",
            label: "",
            style: { minWidth: 12 },
            render(row) {
                return (
                    <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
                        <Tooltip title="endir">
                            <IconButton userİD={row.id} >
                                <FileDownloadIcon sx={{ color: 'gray' }} />
                            </IconButton>
                        </Tooltip>
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
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={tabs} value="documents" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tbody={data} title="Sənədlər" add={addHandleClick} pagination />
            </Box>

            <AddDocumentDialog add={addModalOpen} setAdd={setAddModalOpen} />
            <EditDocumentDialog edit={editModalhOpen} setEdit={setEditModalhOpen} />
            <DeleteDocumentDialog del={deleteOpen} setDelete={setDeleteOpen} />
            
        </>
    );
}