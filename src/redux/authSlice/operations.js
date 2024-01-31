import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, conectAPI, setToken } from 'axiosConfig/conectAPI';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await conectAPI.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await conectAPI.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await conectAPI.post('users/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not exist!');
  }
  try {
    setToken(savedToken);
    const { data } = await conectAPI.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
