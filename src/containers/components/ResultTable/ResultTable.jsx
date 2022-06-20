import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";


export const ResultTable = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {data.map(row => (
            <TableRow
              sx={{
                '&:last-child td': {
                  borderBottom: 0,
                }
              }}
              key={row.name}
            >
              <TableCell
                variant="head"
                sx={{
                  width: "244px",
                  color: "gray",
                  padding: "0"
                }}
              >
                {row.name}
              </TableCell>

              <TableCell>
                {row.value}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};