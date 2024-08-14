import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getTable = (state: RootState) => state.table;

export const getCurrentPage = createSelector(getTable, (table) => {
  return table.currentPage;
});
