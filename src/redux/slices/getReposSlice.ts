import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepoType } from '../../types';

type typesInitialState = {
  page: number;
  reposArr: RepoType[] | null;
  isLoading: boolean;
};

const initialState: typesInitialState = {
  page: 3,
  reposArr: null,
  isLoading: false,
};

export const getReposSlice = createSlice({
  name: 'getRepos',
  initialState,
  reducers: {
    loadRepos(state, action: PayloadAction<RepoType[]>) {
      state.reposArr = action.payload;
    },
    addPage(state) {
        state.page += 3;
    },
    hidePages(state) {
        state.page = 3;
        state.reposArr = null;
    },
    changeLoading(state, action: PayloadAction<boolean>) {
        state.isLoading = action.payload
    }
  },
});

export const { loadRepos, addPage, hidePages, changeLoading } = getReposSlice.actions;

export default getReposSlice.reducer;
