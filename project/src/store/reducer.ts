import { Film } from './../types/film';
import { createReducer } from '@reduxjs/toolkit';
import { films } from './../mock/films';
import { changeGenre, filterFilms } from './action';

const initialState = {
  genre: 'all',
  filteredFilms: films,
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.genre = genre;
    })
    .addCase(filterFilms, (state) => {
      const filteredFilms = films.filter((film: Film) => film.genre.includes(state.genre));

      state.filteredFilms = filteredFilms;
    });
});

export { reducer };
