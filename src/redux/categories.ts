import { createSlice } from '@reduxjs/toolkit';
import api from '../services/FetchApi';

// Slice
const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false
  },
  reducers: {
    getCategoriesData: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    }
  }
});

export default slice.reducer;

// Actions
const { getCategoriesData } = slice.actions;

export const fetchCategories = () => async dispatch => {
  try {
    const url = process.env.REACT_APP_CATEGORIES || '';
    const params = {};

    const { data } = await api({ url, method: 'GET', params });
    dispatch(getCategoriesData(data));
  } catch (e) {
    return console.error(e.message);
  }
};
