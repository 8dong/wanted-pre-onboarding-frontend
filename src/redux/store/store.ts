import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../slice/authSlice';
import todoListSlice from '../slice/todoListSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todoList: todoListSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
