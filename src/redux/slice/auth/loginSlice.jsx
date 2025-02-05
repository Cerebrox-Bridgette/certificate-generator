import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "./../../../utils/baseURL";
const { VITE_REACT_APP_COOKIE_DOMAIN } = import.meta.env;
const setJwtCookie = (token) => {
  document.cookie = `bridgette=${token}; max-age=${
    24 * 60 * 60
  }; path=/; domain=${VITE_REACT_APP_COOKIE_DOMAIN}; samesite=lax`;
};

export const userLogin = createAsyncThunk("user/login", async (data) => {
  try {
    const response = await axios.post("auth/login", data);
    const token = response.data.token;
    setJwtCookie(token);
    return response.data;
  } catch (error) {
    // console.error("Login failed:", error.message);
    throw error;
  }
});

export const resetStatus = createAction("user/resetStatus");

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(resetStatus, (state) => {
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { reducer: userLoginReducer } = userLoginSlice;
