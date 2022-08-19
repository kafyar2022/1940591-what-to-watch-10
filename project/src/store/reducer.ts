import { FILM_COUNT_PER_STEP, DEFAULT_GENRE, AuthorizationStatus, EmptyFilm } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  filterFilmsByGenre,
  loadMoreFilms,
  resetRenderedFilmsCount,
  loadFilms,
  setDataLoadedStatus,
  setAuthorizationStatus,
  setCurrentFilm,
  setSimilarFilms,
  setFilmReviews
} from './action';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/reviews';

type InitialState = {
  genre: string;
  filteredFilms: Films;
  films: Films;
  renderedFilmsCount: number;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  currentFilm: Film;
  similarFilms: Films;
  filmReviews: Reviews;
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  filteredFilms: [],
  films: [],
  renderedFilmsCount: 0,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: EmptyFilm,
  similarFilms: [],
  filmReviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.genre = genre;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === DEFAULT_GENRE) {
        state.filteredFilms = state.films;
        return;
      }
      state.filteredFilms = state.films.filter((film) => film.genre === state.genre);
    })
    .addCase(resetRenderedFilmsCount, (state) => {
      state.renderedFilmsCount = FILM_COUNT_PER_STEP;
    })
    .addCase(loadMoreFilms, (state) => {
      state.renderedFilmsCount = Math.min(state.filteredFilms.length, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
    })
    .addCase(loadFilms, (state, action) => {
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
    });
});

export { reducer };
