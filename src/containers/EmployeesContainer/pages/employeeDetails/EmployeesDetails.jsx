import { Avatar, Box } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import { QueryTabs } from "containers/components/QueryTabs";
import { detailsTabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { employee, employeesDetailsFormRows } from "containers/EmployeesContainer/constants";

export const EmployeesDetails = () => {

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={detailsTabs} value="mainDetails" />
      <Box sx={{ padding: "0 20px", margin: 2, border: "1px solid #C4C4C4", borderRadius: 1 }}>

        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                key="avatar"
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
                  Foto şəkil
                </TableCell>
                <TableCell>
                  <Avatar
                    alt={employee.fullName}
                    src={employee.avatar}
                    sx={{ width: 160, height: 160 }}
                  />
                </TableCell>
              </TableRow>
              {employeesDetailsFormRows.map((row) => (
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
    </Box>
  )
}