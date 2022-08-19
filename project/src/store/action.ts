import { AuthorizationStatus, AppRoute } from './../const';
import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/reviews';

export const changeGenre = createAction<{ genre: string }>('films/changeGenre');

export const filterFilmsByGenre = createAction('films/filter');

export const resetRenderedFilmsCount = createAction('films/resetCount');

export const loadMoreFilms = createAction('films/loadMore');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const setCurrentFilm = createAction<Film>('films/setCurrentFilm');

export const setSimilarFilms = createAction<Films>('films/setSimilarFilms');

export const setFilmReviews = createAction<Reviews>('films/setReviews');
