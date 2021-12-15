import { createSlice } from '@reduxjs/toolkit';
import api from '../services/FetchApi';

// Slice
const slice = createSlice({
  name: 'cats',
  initialState: {
    cats: [],
    isLoading: false
  },
  reducers: {
    getCatsData: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    }
  }
});

export default slice.reducer;

// Actions
const { getCatsData } = slice.actions;

export const fetchCats = params => async dispatch => {
  try {
    const url = process.env.REACT_APP_CATS || '';

    const { data } = await api({ url, method: 'GET', params });
    dispatch(getCatsData(data));
  } catch (e) {
    return console.error(e.message);
  }
};
