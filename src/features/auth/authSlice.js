import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const usereExist = JSON.parse(localStorage.getItem("user"));

const AuthSlice = createSlice({
  name: "burhan",
  initialState: {
    user: usereExist ? usereExist : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(RegisUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(RegisUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
  },
});

export default AuthSlice.reducer;

export const RegisUser = createAsyncThunk(
  "REGISTER/USER",
  async (UserData, thunkAPI) => {
    try {
      return await authService.fetchData(UserData);
    } catch (error) {
      // console.log(error);
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message)
    }
  }
);

// logout

export const logout = createAsyncThunk("LOGOUT/USER", async () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
});

// login;

export const loginUser = createAsyncThunk(
  "LOGIN/USER",
  async (UserData, thunkAPI) => {
    try {
      return await authService.login(UserData);
    } catch (error) {
      // console.log(error);
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message)
    }
  }
);


