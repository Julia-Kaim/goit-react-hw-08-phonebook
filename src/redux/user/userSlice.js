import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  signUpThunk,
} from './userThunk';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpThunk.pending]: handleIfPending,
    [signUpThunk.rejected]: handleIfReject,
    [signUpThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.error = null;
    },
    [loginThunk.pending]: handleIfPending,
    [loginThunk.rejected]: handleIfReject,
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.error = null;
    },
    [logoutThunk.pending]: handleIfPending,
    [logoutThunk.rejected]: handleIfReject,
    [logoutThunk.fulfilled]: () => initialState,
    [refreshUserThunk.pending]: handleIfPending,
    [refreshUserThunk.rejected]: handleIfReject,
    [refreshUserThunk.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
