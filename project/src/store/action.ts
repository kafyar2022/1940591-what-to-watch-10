import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';

export const changeGenre = createAction<{ genre: string }>('films/changeGenre');

export const filterFilmsByGenre = createAction('films/filter');

export const resetRenderedFilmsCount = createAction('films/resetCount');

export const loadMoreFilms = createAction('films/loadMore');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
