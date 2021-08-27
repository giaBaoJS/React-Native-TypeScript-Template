import {configureStore} from '@reduxjs/toolkit';
import {ThemeSlice, UserSlice} from './index';

export const store = configureStore({
  reducer: {
    themes: ThemeSlice,
    users: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
