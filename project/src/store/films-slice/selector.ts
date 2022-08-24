import { createSelector } from 'reselect';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { Film, Films } from '../../types/film';
import { Reviews } from '../../types/reviews';
import { State } from './../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Films].films;

export const getPromoFilm = (state: State): Film => state[NameSpace.Films].promoFilm;

export const getCurrentFilm = (state: State): Film => state[NameSpace.Films].currentFilm;

export const getFavoriteFilms = (state: State): Films => state[NameSpace.Films].favoriteFilms;

export const getSimilarFilms = (state: State): Films => state[NameSpace.Films].similarFilms;

export const getFilmReviews = (state: State): Reviews => state[NameSpace.Films].filmReviews;

export const getCurrentGenre = (state: State): string => state[NameSpace.Films].currentGenre;

export const getFilteredFilms = createSelector(
  [getFilms, getCurrentGenre],
  (films, genre) => {
    if (genre === DEFAULT_GENRE) {
      return films;
    }
    return films.filter((film) => film.genre === genre);
  }
);

export const getRenderedFilmsCount = (state: State): number => state[NameSpace.Films].renderedFilmsCount;
