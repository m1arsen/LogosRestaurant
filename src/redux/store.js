import { configureStore } from '@reduxjs/toolkit';

import items from './items/slice';
import categories from './categories/slice';

export const store = configureStore({
  reducer: { items, categories },
});
