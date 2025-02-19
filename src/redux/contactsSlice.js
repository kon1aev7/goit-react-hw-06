import { createSlice } from "@reduxjs/toolkit";
import contactData from "../contactData.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: contactData,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
