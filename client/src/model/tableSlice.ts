import { createSlice } from "@reduxjs/toolkit";

export interface TableState {
  currentPage: number;
}

const initialState: TableState = {
  currentPage: 1,
};

const tableSlice = createSlice({
  name: "table",
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = tableSlice.actions;
export default tableSlice.reducer;
