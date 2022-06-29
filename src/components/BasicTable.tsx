import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
    typeCount: Number
    missCount: Number

}

function createData(data: object): Array<object> {
  console.log(data);
  let rows = [];
  let count = 0;
  let key;
  for (key in data) {
    const row = { name: key, value: data[key as keyof typeof data] }
    rows[count] = row;
    count++;
  }
  return rows;
}

const BasicTable:React.FC<{ data: object }> = ( data ) => {
  const rows = createData(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
