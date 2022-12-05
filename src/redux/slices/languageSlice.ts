import { createSlice } from '@reduxjs/toolkit';
import {ru, eu} from '../../languages'
import { typeLang } from '../../types';




const initialState: typeLang = {
  language: 'eu',
  languageOb: JSON.parse(localStorage.getItem('lang') || 'null') || eu,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage(state) {
        if (state.language === 'eu') {
            state.languageOb = ru
            state.language = 'ru';
            localStorage.setItem('lang', JSON.stringify(ru));
        } else {
            state.languageOb = eu
            state.language = 'eu';
            localStorage.setItem('lang', JSON.stringify(eu));
        } 
     }
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
