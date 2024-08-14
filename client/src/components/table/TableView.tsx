import { PaginationBlock } from "../UI/Pagination";
import { TableHeader } from "./TableHeader";
import { TableBodyBase } from "./TableBody";
import { Table, TableContainer, Paper } from "@mui/material";
import { tableApi } from "../../model/apiSlice";
import { useSelector } from "react-redux";
import { getCurrentPage } from "../../model/selectors";

export const TableView = () => {
  const current = useSelector(getCurrentPage);
  const { data, isLoading, error } = tableApi.useGetTableDataQuery(current);

  if (error) {
    return <div>Уупс...</div>;
  }

  if (isLoading) return <div>Загрузка...</div>;
  if (!data || !data.total) return <div>Пусто</div>;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBodyBase visibleTable={data.data} />
        </Table>
      </TableContainer>
      <PaginationBlock count={data.total} />
    </div>
  );
};
