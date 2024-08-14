import { TableBody, TableCell, TableRow } from "@mui/material";
import { TableData } from "../../types";

type Props = { visibleTable: TableData[] };

export const TableBodyBase = ({ visibleTable }: Props) => {
  return (
    <TableBody>
      {visibleTable.map((item: TableData) => (
        <TableRow
          key={item.articleid + item.subarticleid}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell>{item.articleid}</TableCell>
          <TableCell align="right">{item.subarticleid}</TableCell>
          <TableCell align="right">{item.ecrlongname}</TableCell>
          <TableCell align="right">{item.external_str_id}</TableCell>
          <TableCell align="right">{item.ecrlongname}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
