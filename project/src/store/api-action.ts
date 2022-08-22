import { NewReviewData } from './../types/reviews';
import { generatePath } from 'react-router-dom';
import { AppRoute } from './../const';
import { Films } from './../types/film';
import {
  filterFilmsByGenre,
  redirectToRoute,
  setAuthorizationStatus,
  setCurrentFilm,
  setSimilarFilms,
  setFilmReviews,
  setFilms,
  setPromoFilm,
  setFavoriteFilms,
  updateFilm,
} from './action';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { dropUser, saveUser } from '../services/user';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(setFilms(data));
    dispatch(filterFilmsByGenre());
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
    saveUser(data);
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
    dropUser();
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
    try {
      const { data } = await api.get(generatePath(APIRoute.Film, { filmId }));
      dispatch(setCurrentFilm(data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
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
  'films/fetchFilmReviews',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Reviews, { filmId }));
    dispatch(setFilmReviews(data));
  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get(APIRoute.Promo);
    dispatch(setPromoFilm(data));
  },
);

export const fetchFavoriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFavoriteFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get(APIRoute.FavoriteFilms);
    dispatch(setFavoriteFilms(data));
  },
);

export const toggleFavorite = createAsyncThunk<void, { filmId: number; status: number; }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/toggleFavorite',
  async ({ filmId, status }, { dispatch, extra: api }) => {
    const { data } = await api.post(generatePath(APIRoute.ToggleFavorite, { filmId: String(filmId), status: String(status) }));
    dispatch(updateFilm(data));
  },
);

export const postNewReview = createAsyncThunk<void, NewReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/post',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    await api.post(generatePath(APIRoute.PostReview, { filmId: String(filmId) }), { comment, rating });
    dispatch(redirectToRoute(generatePath(AppRoute.Film, { id: String(filmId) })));
  },
);
