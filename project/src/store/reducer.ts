import { GenreType } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { films } from './../mock/films';
import { changeGenre, filterFilmsByGenre } from './action';

const initialState = {
  genre: GenreType.ALL.toString(),
  filteredFilms: [...films],
  films: [...films],
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
    });
});

export { reducer };
