import { AuthorizationStatus } from './../const';
import { store } from '../store';
import { Film, Films } from './film';
import { Reviews } from './reviews';

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmsSlice = {
  films: Films;
  promoFilm: Film;
  currentFilm: Film;
  similarFilms: Films;
  favoriteFilms: Films;
  filmReviews: Reviews;
  currentGenre: string;
  renderedFilmsCount: number;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
