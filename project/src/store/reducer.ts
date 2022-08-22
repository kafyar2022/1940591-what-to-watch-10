import { FILM_COUNT_PER_STEP, DEFAULT_GENRE, AuthorizationStatus, EmptyFilm } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  filterFilmsByGenre,
  loadMoreFilms,
  resetRenderedFilmsCount,
  setFilms,
  setDataLoadedStatus,
  setAuthorizationStatus,
  setCurrentFilm,
  setSimilarFilms,
  setFilmReviews,
  setPromoFilm,
  setFavoriteFilms,
  updateFilm,
} from './action';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/reviews';

type InitialState = {
  currentGenre: string;
  filteredFilms: Films;
  films: Films;
  renderedFilmsCount: number;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  currentFilm: Film;
  similarFilms: Films;
  filmReviews: Reviews;
  promoFilm: Film;
  favoriteFilms: Films;
}

const initialState: InitialState = {
  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  films: [],
  renderedFilmsCount: 0,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: EmptyFilm,
  similarFilms: [],
  filmReviews: [],
  promoFilm: EmptyFilm,
  favoriteFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.currentGenre = genre;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.currentGenre === DEFAULT_GENRE) {
        state.filteredFilms = state.films;
        return;
      }
      state.filteredFilms = state.films.filter((film) => film.genre === state.currentGenre);
    })
    .addCase(resetRenderedFilmsCount, (state) => {
      state.renderedFilmsCount = FILM_COUNT_PER_STEP;
    })
    .addCase(loadMoreFilms, (state) => {
      state.renderedFilmsCount = Math.min(state.filteredFilms.length, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
      state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(updateFilm, (state, action) => {
      const updatedFilm = action.payload;

      let index = initialState.films.findIndex((film) => film.id === updatedFilm.id);
      state.films = [
        ...state.films.slice(0, index),
        updatedFilm,
        ...state.films.slice(index + 1)
      ];

      index = state.filteredFilms.findIndex((film) => film.id === updatedFilm.id);
      if (index !== -1) {
        state.filteredFilms = [
          ...state.filteredFilms.slice(0, index),
          updatedFilm,
          ...state.filteredFilms.slice(index + 1)
        ];
      }

      index = state.similarFilms.findIndex((film) => film.id === updatedFilm.id);
      if (index !== -1) {
        state.similarFilms = [
          ...state.similarFilms.slice(0, index),
          updatedFilm,
          ...state.similarFilms.slice(index + 1)
        ];
      }

      if (updatedFilm.isFavorite) {
        state.favoriteFilms = [...state.favoriteFilms, updatedFilm];
      } else {
        state.favoriteFilms = state.favoriteFilms.filter((films) => films.id !== updatedFilm.id);
      }

      if (updatedFilm.id === state.promoFilm.id) {
        state.promoFilm = updatedFilm;
      }

      if (updatedFilm.id === state.currentFilm.id) {
        state.currentFilm = updatedFilm;
      }
    });
});

export { reducer };
