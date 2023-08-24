import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/REGISTER',
  async (registerData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', registerData);
      setHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logInUser = createAsyncThunk(
  'auth/LOGIN',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginData);
      setHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/REFRESH',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'AUTH/LOGOUT',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearToken();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
