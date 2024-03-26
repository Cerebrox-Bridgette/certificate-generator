import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/baseURL";

export const updateInfo = createAsyncThunk("user/udpateInfo", async (data) => {
  try {
    const response = await axios.put("auth/update-profile", data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
});

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const updateInfoSlice = createSlice({
  name: "updateInfo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const updateInfoReducer = updateInfoSlice.reducer;
export default updateInfoReducer;
