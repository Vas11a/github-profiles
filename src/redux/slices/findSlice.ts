import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userObTypes } from '../../types';

type typesInitialState = {
    userName: string;
    userOb: userObTypes | null;
    isLoading: boolean
}

const initialState: typesInitialState = {
  userName: '',
  userOb: null,
  isLoading: false,
};

export const findSlice = createSlice({
  name: 'find',
  initialState,
  reducers: {
    changeUserName(state, action:PayloadAction<string>) {
        state.userName = action.payload
    },
    changeUser(state, action: PayloadAction<userObTypes | null>){
        state.userOb = action.payload
    },
    changeLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  },
});

export const { changeUserName, changeUser, changeLoading } = findSlice.actions;

export default findSlice.reducer;
