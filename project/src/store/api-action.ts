import { Film } from './../types/film';
import { NewReviewData, Review, Reviews } from './../types/reviews';
import { generatePath } from 'react-router-dom';
import { AppRoute } from './../const';
import { redirectToRoute } from './action';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { dropUser, saveUser } from '../services/user';
import { Films } from '../types/film';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => await api.get(APIRoute.Login),
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
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropUser();
  },
);

export const fetchFilms = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'films/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Films);
    return data;
  },
);

export const fetchPromoFilm = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmById = createAsyncThunk<Film, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilmById',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(generatePath(APIRoute.Film, { filmId }));
      return data;
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk<Films, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchSimilarFilms',
  async (filmId, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.SimilarFilms, { filmId }));
    return data;
  },
);

export const fetchFavoriteFilms = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.FavoriteFilms);
    return data;
  },
);

export const fetchFilmReviews = createAsyncThunk<Reviews, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilmReviews',
  async (filmId, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Reviews, { filmId }));
    return data;
  },
);

export const toggleFilmFavorite = createAsyncThunk<Film, { filmId: number; status: number; }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/toggleFavorite',
  async ({ filmId, status }, { extra: api }) => {
    const { data } = await api.post(generatePath(APIRoute.ToggleFavorite, { filmId: String(filmId), status: String(status) }));
    return data;
  },
);

export const postNewReview = createAsyncThunk<Review, NewReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/post',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post(generatePath(APIRoute.PostReview, { filmId: String(filmId) }), { comment, rating });
    dispatch(redirectToRoute(generatePath(AppRoute.Film, { id: String(filmId) })));
    return data;
  },
);
