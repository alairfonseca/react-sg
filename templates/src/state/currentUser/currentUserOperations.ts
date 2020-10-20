import { Dispatch } from 'redux';
import * as actions from './currentUserSlice';

export const setUserData = (
  email: string
) => async (dispatch: Dispatch) => {
    await dispatch(actions.signInSuccess({ email }));
};

export const clearReduxStore = () => async (dispatch: Dispatch) => {
  await dispatch(actions.signOut());
}