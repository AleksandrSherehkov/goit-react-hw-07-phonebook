import { configureStore } from '@reduxjs/toolkit';
import items from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: items,
  },
});

export { store };
