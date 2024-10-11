import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './asyncActions';

const initialState = {
  items: [],
  status: 'loading',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default itemsSlice.reducer;
