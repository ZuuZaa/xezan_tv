import { Table } from "components/Table";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, IconButton, Tooltip } from "@mui/material";
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
                </Box>
            )
        }
    }
]

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

export const EmployeesDocumentsDetails = () => {
    const classes = useStyles();
    return (
        <>

            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={detailsTabs} value="documentsDetails" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tbody={data} pagination />
            </Box>
        </>
    );
}