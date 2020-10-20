import { createSlice } from '@reduxjs/toolkit';
import { CurrentUserState } from './currentUserTypes';

export const initialState: CurrentUserState = {
  data: {
    id: undefined,
    name: '',
    email: '',
  },
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    signInSuccess(state, action) {
      state.data = action.payload;
    },
    signOut() {
      return initialState;
    },
  },
});

export const {
  signInSuccess,
  signOut,
} = currentUserSlice.actions;

export default currentUserSlice;
