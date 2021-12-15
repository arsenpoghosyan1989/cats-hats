import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cats from './cats';
import categories from './categories';

export type InitialState = {
  cats: { cats: any; isLoading: boolean };
  categories: { categories: any; isLoading: boolean };
};

const reducer = combineReducers({
  cats,
  categories
});

const store = configureStore({
  reducer
});

export default store;
