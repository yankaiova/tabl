import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TableDataFromApi } from "../types";

export const tableApi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getTableData: builder.query<TableDataFromApi, number>({
      query: (currentPage) => `/table?currentPage=${currentPage}`,
    }),
  }),
});
