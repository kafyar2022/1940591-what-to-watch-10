import { GenreType, FILM_COUNT_PER_STEP } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { films } from './../mock/films';
import { changeGenre, filterFilmsByGenre, loadMoreFilms, resetRenderedFilmsCount } from './action';

const initialState = {
  genre: GenreType.ALL.toString(),
  filteredFilms: [...films],
  films: [...films],
  renderedFilmsCount: Math.min(films.length, FILM_COUNT_PER_STEP),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.genre = genre;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === GenreType.ALL) {
        state.filteredFilms = state.films;
        return;
      }
      state.filteredFilms = state.films.filter((film) => film.genre.includes(state.genre));
    })
    .addCase(resetRenderedFilmsCount, (state) => {
      state.renderedFilmsCount = Math.min(state.filteredFilms.length, FILM_COUNT_PER_STEP);
    })
    .addCase(loadMoreFilms, (state) => {
      state.renderedFilmsCount = Math.min(state.filteredFilms.length, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
    });
});

export { reducer };
