import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userObTypes } from '../../types';

type typesInitialState = {
  yourNick: string;
  yourOb: userObTypes | null;
  isLoading: boolean;
};

const initialState: typesInitialState = {
  yourNick: '',
  yourOb: JSON.parse(localStorage.getItem('profile') || 'null') || null,
  isLoading: false,
};

export const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    changeProfile(state, action: PayloadAction<userObTypes | null>) {
      state.yourOb = action.payload;
        localStorage.setItem('profile', JSON.stringify(action.payload));     
            
    },
    changeyourNick(state, action: PayloadAction<string>) {
        state.yourNick = action.payload
    },
    changeIsLoading(state, action:PayloadAction<boolean>) {
        state.isLoading = action.payload
    }
  },
});

export const { changeProfile, changeyourNick, changeIsLoading } = myProfileSlice.actions;

export default myProfileSlice.reducer;
