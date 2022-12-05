import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type typesInitialState = {
  thema: string
};

const initialState: typesInitialState = {
  thema: localStorage.getItem('thema') || 'white',
};

export const themaSlice = createSlice({
  name: 'thema',
  initialState,
  reducers: {
    changeThema(state,action:PayloadAction<string>) {
        state.thema = action.payload
        localStorage.setItem('thema', action.payload);
    }
  },
});

export const { changeThema } = themaSlice.actions;

export default themaSlice.reducer;
