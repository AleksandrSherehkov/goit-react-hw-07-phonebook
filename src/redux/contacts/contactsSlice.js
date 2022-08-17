import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getContacts.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContacts.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [removeContacts.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
    [removeContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
