import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact, } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;