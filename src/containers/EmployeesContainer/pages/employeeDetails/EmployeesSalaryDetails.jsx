import { detailsTabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";


const salary = {
    experienceBefore: "12il 9ay 23gün",
    experienceAfter: "11ay 8gün",
    experience: "13il 9ay 2gün",
    grossSalary: "1000",
    netSalary: "950",
}

const rows = [
    { name: '"Xəzan TV" MMC-yə qədərki iş stajı', value: salary.experienceBefore },
    { name: '"Xəzan TV" MMC-də olan iş stajı', value: salary.experienceAfter },
    { name: "Ümumi iş stajı", value: salary.experience },
    { name: "Əmək haqqı gross(AZN)", value: salary.grossSalary },
    { name: "Əmək Haqqı net(AZN)", value: salary.netSalary },
]

export const EmployeesSalaryDetails = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={detailsTabs} value="salaryDetails" />
            <Box sx={{ padding: "0 20px", margin: 2, border: "1px solid #C4C4C4", borderRadius: 1 }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        variant="head"
                                        sx={{
                                            width: 244,
                                            color: "gray",
                                            padding: "0"
                                        }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </>
    );
}