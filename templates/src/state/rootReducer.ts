import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import currentUserSlice from './currentUser/currentUserSlice';

const persistCurrentUser = {
  key: 'currentUser',
  storage,
  whitelist: ['data'],
};

export const currentUser = persistReducer(
  persistCurrentUser,
  currentUserSlice.reducer
);

const rootReducer = combineReducers({
  currentUser,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
