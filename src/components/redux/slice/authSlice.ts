import { createSlice } from '@reduxjs/toolkit';

const initialState = !!window.localStorage.getItem('access_token');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(_, action) {
      window.localStorage.setItem('access_token', action.payload);
      return true;
    },
    logout() {
      window.localStorage.removeItem('access_token');
      return false;
    }
  }
});

export default authSlice;
