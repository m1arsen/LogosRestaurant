import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCategories } from '../categories/slice';

export const fetchItems = createAsyncThunk('items/fetchItems', async (_, { dispatch }) => {
  const apiBase = process.env.REACT_APP_MOCKAPI_TOKEN;
  const response = await fetch(`https://${apiBase}.mockapi.io/menu`);
  const items = await response.json();

  // Вычисление уникальных категорий и их диспатч
  const uniqueCategories = [];
  const categoryMap = new Map();

  items.forEach((item) => {
    const { id, name } = item.category;
    if (!categoryMap.has(id)) {
      categoryMap.set(id, name);
      uniqueCategories.push({ id, name });
    }
  });

  dispatch(setCategories(uniqueCategories));

  return items;
});
