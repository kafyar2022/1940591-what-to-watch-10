import { GenreType } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { films } from './../mock/films';
import { changeGenre, getFilmsByGenre } from './action';

const initialState = {
  genre: GenreType.ALL.toString(),
  films: [...films],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.genre = genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      if (state.genre === GenreType.ALL) {
        state.films = [...films];
        return;
      }
      state.films = films.filter((film) => film.genre.includes(state.genre));
    });
});

export { reducer };
