import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipient = createAsyncThunk(
  "recipient/fetchRecipient",
  async () => {
    try {
      const response = await axios.get("/api/recipient/get-recipients-by-user");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
const initialState = {
  recipients: [],
  loading: false,
  success: false,
  error: false,
  recipientsEmail: [],
};
const recipientsSlice = createSlice({
  name: "recipients",
  initialState,
  reducers: {
    addRecipientStart: (state) => {
      state.error = false;
      state.loading = true;
      state.success = false;
    },
    addRecipientSuccess: (state, action) => {
      const { recipient, message } = action.payload;
      state.recipients = [...state.recipients, recipient];
      state.loading = false;
      state.success = message;
    },
    addRecipientFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    updateRecipientStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    updateRecipientSuccess: (state, action) => {
      const { updatedRecipient, message } = action.payload;
      const index = state.recipients.findIndex(
        (recipient) => recipient._id === updatedRecipient._id
      );
      if (index !== -1) {
        state.recipients[index] = updatedRecipient;
      }
      state.loading = false;
      state.success = message;
    },
    updateRecipientFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    deleteRecipientStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    deleteRecipientSuccess: (state, action) => {
      const { deletedRecipient, message } = action.payload;
      state.recipients = state.recipients.filter(
        (recipient) => recipient._id !== deletedRecipient._id
      );
      state.loading = false;
      state.success = message;
    },
    deleteRecipientFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    setSelectedRecipientEmail: (state, action) => {
      state.recipientsEmail = action.payload;
    },
    clearRecipientMessages: (state) => {
      state.error = false;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRecipient.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(fetchRecipient.fulfilled, (state, action) => {
        state.error = false;
        state.recipients = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {
  addRecipientStart,
  addRecipientSuccess,
  addRecipientFailure,
  updateRecipientFailure,
  updateRecipientStart,
  updateRecipientSuccess,
  deleteRecipientFailure,
  deleteRecipientStart,
  deleteRecipientSuccess,
  setSelectedRecipientEmail,
  clearRecipientMessages,
} = recipientsSlice.actions;
export default recipientsSlice.reducer;
