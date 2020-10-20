import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './state/rootReducer';
import { CurrentUserState } from './state/currentUser/currentUserTypes';

export interface AppState {
  currentUser: CurrentUserState;
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
export default store;
