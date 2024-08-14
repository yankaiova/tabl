import { TableHead, TableRow, TableCell } from "@mui/material";

export const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>articleid</TableCell>
        <TableCell align="right">subarticleid</TableCell>
        <TableCell align="right">articlename</TableCell>
        <TableCell align="right">external_str_id</TableCell>
        <TableCell align="right">ecrlongname</TableCell>
      </TableRow>
    </TableHead>
  );
};
