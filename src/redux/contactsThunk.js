import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, delContacts, getContacts } from '../service/contactsAPI';
import { token } from 'service/userApi';


export const getContactsThunk = createAsyncThunk(
  'Contacts/allContacts',
  async (evt, { rejectWithValue, getState }) => {
    try {
      const tempToken = getState().auth.token;
      if (!tempToken) {
        return rejectWithValue('token is invalid');
      }
      token.set(tempToken);
      const data = getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'Contacts/addContact',
   async (contact, { rejectWithValue }) => {
    try {
      const data = addContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const delContactsThunk = createAsyncThunk(
  'Contacts/delContact',
   async (id, { rejectWithValue }) => {
    try {
      const data = delContacts(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);