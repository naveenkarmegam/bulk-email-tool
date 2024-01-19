import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMails = createAsyncThunk("mails/fetchMails", async () => {
  try {
    const response = await axios.get("/api/mail/getMailsByUser");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const initialState = {
  mails: [],
  loading: false,
  success: false,
  error: false,
  selectEmail: null,
};
const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    viewMailStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    viewMailSuccess: (state, action) => {
      state.loading = false;
      state.selectEmail = action.payload;
    },
    viewMailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteMailStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    deleteMailSuccess: (state, action) => {
      const { deletedMail, message } = action.payload;
      state.mails = state.mails.filter((mail) => mail._id !== deletedMail._id);
      state.loading = false;
      state.success = message;
    },
    deleteMailFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    clearMailMessages: (state) => {
      state.error = false;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMails.fulfilled, (state, action) => {
        state.error = false;
        state.mails = action.payload;
        state.loading = false;
      })
      .addCase(fetchMails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {
  viewMailStart,
  viewMailSuccess,
  viewMailFailure,
  deleteMailStart,
  deleteMailSuccess,
  deleteMailFailure,
  clearMailMessages
} = mailSlice.actions;
export default mailSlice.reducer;
