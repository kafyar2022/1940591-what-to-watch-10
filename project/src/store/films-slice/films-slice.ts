import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, EmptyFilm, FILM_COUNT_PER_STEP, NameSpace } from '../../const';
import { FilmsSlice } from '../../types/state';
import { fetchFavoriteFilms, fetchFilmById, fetchFilmReviews, fetchFilms, fetchPromoFilm, fetchSimilarFilms, toggleFilmFavorite } from '../api-action';

const initialState: FilmsSlice = {
  films: [],
  promoFilm: EmptyFilm,
  currentFilm: EmptyFilm,
  favoriteFilms: [],
  similarFilms: [],
  filmReviews: [],
  currentGenre: DEFAULT_GENRE,
  renderedFilmsCount: FILM_COUNT_PER_STEP,
};

export const filmsSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setCurrentGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    setRenderedFilmsCount: (state, action) => {
      state.renderedFilmsCount = action.payload;
    },
    incrementRenderedFilmsCount: (state) => {
      state.renderedFilmsCount += FILM_COUNT_PER_STEP;
    },
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.fulfilled, (state, action) => {
        const films = action.payload;
        state.films = films;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(fetchFilmReviews.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
      })
      .addCase(toggleFilmFavorite.fulfilled, (state, action) => {
        const updatedFilm = action.payload;

        if (updatedFilm.isFavorite) {
          state.favoriteFilms.unshift(updatedFilm);
        } else {
          state.favoriteFilms = state.favoriteFilms.filter((films) => films.id !== updatedFilm.id);
        }

        if (updatedFilm.id === state.promoFilm.id) {
          state.promoFilm.isFavorite = !state.promoFilm.isFavorite;
        }

        if (updatedFilm.id === state.currentFilm.id) {
          state.currentFilm.isFavorite = !state.currentFilm.isFavorite;
        }
      });
  },
});

export const { setCurrentGenre, setRenderedFilmsCount, incrementRenderedFilmsCount, setCurrentFilm } = filmsSlice.actions;
