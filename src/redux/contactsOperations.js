import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactsApi, removeContactsApi } from '../utils/contactsApi';

export const getContacts = createAsyncThunk('getContacts', async (_, thunkApi) => {
  //- getContacts/pending
  try {
    const contacts = await getContactsApi();
    return contacts; //- getContacts/fullfild
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); //- getContacts/rejected
  }
});

export const addContacts = createAsyncThunk('addContacts', async (contacts, thunkApi) => {
  try {
    const newContact = await addContactsApi(contacts);
    return newContact;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeContacts = createAsyncThunk('removeContacts', async (id, thunkApi) => {
  try {
    const contacts = await removeContactsApi(id);
    return contacts;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
