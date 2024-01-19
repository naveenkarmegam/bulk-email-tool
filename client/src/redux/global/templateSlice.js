import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTemplates = createAsyncThunk(
  "templates/fetchTemplates",
  async () => {
    try {
      const response = await axios.get("/api/template/get-template-by-user");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
const initialState = {
  templates: [],
  loading: false,
  success: false,
  error: false,
  setTemplate: [],
};
const templateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    addTemplateStart: (state) => {
      state.error = false;
      state.loading = true;
      state.success = false;
    },
    addTemplateSuccess: (state, action) => {
      const { template, message } = action.payload;
      state.templates = [...state.templates, template];
      state.loading = false;
      state.success = message;
    },
    addTemplateFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    updateTemplateStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    updateTemplateSuccess: (state, action) => {
      const { updatedTemplate, message } = action.payload;
      const index = state.templates.findIndex(
        (template) => template._id === updatedTemplate._id
      );
      if (index !== -1) {
        state.templates[index] = updatedTemplate;
      }
      state.loading = false;
      state.success = message;
    },
    updateTemplateFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    deleteTemplateStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    deleteTemplateSuccess: (state, action) => {
      const { deletedTemplate, message } = action.payload;
      state.templates = state.templates.filter(
        (template) => template._id !== deletedTemplate._id
      );
      state.loading = false;
      state.success = message;
    },
    deleteTemplateFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    setSelectedTemplate: (state, action) => {
      state.setTemplate = action.payload;
    },
    clearTemplateMessages: (state) => {
      state.error = false;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTemplates.fulfilled, (state, actions) => {
        state.loading = false;
        state.templates = actions.payload;
        state.error = false;
      })
      .addCase(fetchTemplates.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.error;
      });
  },
});

export const {
  addTemplateStart,
  addTemplateSuccess,
  addTemplateFailure,
  updateTemplateStart,
  updateTemplateSuccess,
  updateTemplateFailure,
  deleteTemplateStart,
  deleteTemplateSuccess,
  deleteTemplateFailure,
  setSelectedTemplate,
  clearTemplateMessages,
} = templateSlice.actions;
export default templateSlice.reducer;
