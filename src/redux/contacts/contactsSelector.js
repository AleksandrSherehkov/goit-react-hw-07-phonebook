import { createSelector } from '@reduxjs/toolkit';

export const getItem = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;

export const filteredContactList = createSelector([getItem, getFilter], (items, filter) => {
  const newItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return newItems;
});
