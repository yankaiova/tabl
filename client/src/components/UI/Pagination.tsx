import { usePagination } from "../../lib/usePagination";
import { Pagination } from "@mui/material";
import { memo } from "react";

export const PaginationBlock = memo(({ count }: { count: number }) => {
  const { current, navigateAfterClick } = usePagination();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigateAfterClick(value);
  };

  return <Pagination count={count} page={current} onChange={handleChange} />;
});
