import { useState } from 'react';
import { Table as MuiTable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, Paper, CircularProgress, TableFooter } from '@mui/material';
import { Description } from '@mui/icons-material'
import _ from "lodash";
import { useStyles } from "./TableStyle";
import { TableHeaderExtra } from './TableHeaderExtra';


export function Table({ tbody = [], thead = [], tfoot = [], title=null, add, pagination, loading }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      className={classes.tcontainer}
    >
      {title && <TableHeaderExtra title={title} add={add}/>}

      <MuiTable stickyHeader aria-label="sticky table">
        <TableHead>
        
          <TableRow>
            {thead.map((column) => (
              <TableCell
                className={classes.thead}
                key={column.key}
                style={column.style}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {!loading && !_.isEmpty(tbody) && tbody.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover key={row.id}>
                  {thead.map((column) => {
                    if (column.render) {
                      return (
                        <TableCell key={column.key}
                          className={classes.tcell}
                        >
                          <Box className={classes.iconsBox}>
                            {column.render(row)}
                          </Box>
                        </TableCell>
                      )
                    } else {
                      const value = row[column.key];
                      return (
                        <TableCell key={column.key}
                          className={classes.tcell}
                        >
                          <Box className={classes.iconsBox}>
                            <Typography className={classes.data}>
                              {value}
                            </Typography>
                          </Box>
                        </TableCell>
                      )
                    }
                  })}
                </TableRow>
              );
            })}
        </TableBody>
        <TableFooter>
          <TableRow>
            {tfoot.map((column) => (
              <TableCell
                className={classes.tfoot}
                sx={{backgroundColor: title ? "#fff" : "#F5F5F5"}}
                key={column.key}
              >
                {column.value}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </MuiTable>

      {loading &&
        <Box className={classes.noDataContainer}>
          {loading ? <CircularProgress /> :
            _.isEmpty(tbody) &&
            <>
              <Description className={classes.noDataIcon} />
              <Typography className={classes.noDataText}>Sənəd mövcud deyil</Typography>
            </>}
        </Box>
      }

      {pagination && !_.isEmpty(tbody) && <TablePagination
        rowsPerPageOptions={[4, 10, 25, 100]}
        component="div"
        count={tbody.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />}

    </TableContainer>
  );
}
