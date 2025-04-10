import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const adminLoginSlice = createSlice({
  name: 'adminLogin',
  initialState: {
    account: {
      username: '',
      password: '',
    },
    isManagementPageOpen: false,
  },
  reducers: {
    setAccount: (state, action) => {
      const { value, name } = action.payload;
      state.account[name] = value;
    },
    setIsManagementOpen: (state, action) => {
      state.isManagementPageOpen = action.payload;
    },
  },
});

export const adminLogin = createAsyncThunk(
  'login/AdminLogin',
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const account = getState().adminLogin.account; //getState <-- 取得slice 初始資料的方法
      const res = await axios.post(`${BASE_URL}/v2/admin/signin`, account);
      const { token, expired } = res.data; //從登入成功資料取得
      document.cookie = `nomadsToken=${token}; expires=${new Date(expired)}`; //設定cookie的token及有效期
      axios.defaults.headers.common['Authorization'] = token;
      dispatch(adminLoginSlice.actions.setIsManagementOpen(true)); //派送頁面開啟的狀態
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkAuthStatus = createAsyncThunk(
  'check/adminCheck',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await axios.post(`${BASE_URL}/v2/api/user/check`);
      dispatch(adminLoginSlice.actions.setIsManagementOpen(true));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { setAccount } = adminLoginSlice.actions;
export default adminLoginSlice.reducer;
