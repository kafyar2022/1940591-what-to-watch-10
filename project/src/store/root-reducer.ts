import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userSlice } from './user-slice/user-slice';
import { filmsSlice } from './films-slice/films-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Films]: filmsSlice.reducer,
});
