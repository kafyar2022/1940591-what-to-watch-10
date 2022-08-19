import { generatePath } from 'react-router-dom';
import { AppRoute } from './../const';
import { Films } from './../types/film';
import {
  filterFilmsByGenre,
  loadFilms,
  setDataLoadedStatus,
  redirectToRoute,
  setAuthorizationStatus,
  setCurrentFilm,
  setSimilarFilms,
  setFilmReviews
} from './action';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';

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

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchFilm = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Film, { filmId }));
    dispatch(setCurrentFilm(data));
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchSimilarFilms',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.SimilarFilms, { filmId }));
    dispatch(setSimilarFilms(data));
  },
);

export const fetchFilmReviews = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchSimilarFilms',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Reviews, { filmId }));
    dispatch(setFilmReviews(data));
  },
);
