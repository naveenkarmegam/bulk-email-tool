import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDashboard = createAsyncThunk(
  "dashBoardInfo/fetchDashboard",
  async () => {
    try {
      const response = await axios.get("/api/user/dashBoardInfo");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  dashBoardInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    logInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfileStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    updateProfileSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    clearMessages: (state) => {
      state.error = false;
      state.success = false;
      state.loading = false;
    },
    increaseRecipientCount: (state) => {
      if (state.dashBoardInfo) {
        // Check if dashBoardInfo is not null
        if (state.dashBoardInfo.recipientCount !== null) {
          state.dashBoardInfo.recipientCount += 1;
        }
        if (state.dashBoardInfo.totalRecipientsCount !== null) {
          state.dashBoardInfo.totalRecipientsCount += 1;
        }
      }
    },
    decreaseRecipientCount: (state) => {
      if (state.dashBoardInfo) {
        // Check if dashBoardInfo is not null
        if (
          state.dashBoardInfo.recipientCount !== null &&
          state.dashBoardInfo.recipientCount > 0
        ) {
          state.dashBoardInfo.recipientCount -= 1;
        }
        if (
          state.dashBoardInfo.totalRecipientsCount !== null &&
          state.dashBoardInfo.totalRecipientsCount > 0
        ) {
          state.dashBoardInfo.totalRecipientsCount -= 1;
        }
      }
    },
    increaseMailCount: (state) => {
      if (state.dashBoardInfo) {
        // Check if dashBoardInfo is not null
        if (
          state.dashBoardInfo.userMailCount !== null &&
          state.dashBoardInfo.userMailCount > 0
        ) {
          state.dashBoardInfo.userMailCount += 1;
        }
        if (
          state.dashBoardInfo.totalMailCount !== null &&
          state.dashBoardInfo.totalMailCount > 0
        ) {
          state.dashBoardInfo.totalMailCount += 1;
        }
      }
    },
    decreaseMailCount: (state) => {
      if (state.dashBoardInfo) {
        // Check if dashBoardInfo is not null
        if (
          state.dashBoardInfo.userMailCount !== null &&
          state.dashBoardInfo.userMailCount > 0
        ) {
          state.dashBoardInfo.userMailCount -= 1;
        }
        if (
          state.dashBoardInfo.totalMailCount !== null &&
          state.dashBoardInfo.totalMailCount > 0
        ) {
          state.dashBoardInfo.totalMailCount -= 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashBoardInfo = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {
  logInStart,
  logInSuccess,
  logInFailure,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
  logOutSuccess,
  clearMessages,
  increaseRecipientCount,
  decreaseRecipientCount,
  increaseMailCount,
} = userSlice.actions;

export default userSlice.reducer;
