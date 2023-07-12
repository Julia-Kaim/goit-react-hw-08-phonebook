import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './contactsThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};


const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        name: "Felix Schumm",
        number: "(261) 363-5133 x69771",
        id: "1"
      },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getContactsThunk.pending]: handlePending,
    [getContactsThunk.rejected]: handleReject,
    [getContactsThunk.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },
    [addContactsThunk.pending]: handlePending,
    [addContactsThunk.rejected]: handleReject,
    [addContactsThunk.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
    },
    [delContactsThunk.pending]: handlePending,
    [delContactsThunk.rejected]: handleReject,
    [delContactsThunk.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const { addContactsActions, delContactsActions } = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;

