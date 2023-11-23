import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { pageIndex: 1 };

const PageToggleSlice = createSlice({
  name: "pageToggle",
  initialState: initialToggleState,
  reducers: {
    changePage(state, action) {
      if (action.payload == 1) {
        state.pageIndex = 1;
      } else if (action.payload == 2) {
        state.pageIndex = 2;
      } else {
        state.pageIndex = 3;
      }
    },
  },
});

export default PageToggleSlice;
