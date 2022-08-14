import { Films } from './../types/film';
import { filterFilmsByGenre, loadFilms, setDataLoadedStatus } from './action';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(filterFilmsByGenre());
    dispatch(setDataLoadedStatus(true));
  },
);
