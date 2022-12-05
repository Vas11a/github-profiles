import { configureStore } from '@reduxjs/toolkit';
import findSlice from './slices/findSlice';
import getReposSlice from './slices/getReposSlice';
import themaSlice from './slices/themaSlice';
import myProfileSlice from './slices/myProfileSlice';
import languageSlice from './slices/languageSlice';

const store = configureStore({
  reducer: {
    find: findSlice,
    getRepos: getReposSlice,
    thema: themaSlice,
    myslice: myProfileSlice,
    language: languageSlice,
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch 