export const FILM_COUNT_PER_STEP = 8;
export const VIDEO_PLAY_TIME_DELAY = 1000;
export const DEFAULT_GENRE = 'All genres';
export const MAX_COMMENT_LENGTH = 400;
export const MIM_COMMENT_LENGTH = 50;


export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Tab {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Film = '/films/:filmId',
  SimilarFilms = '/films/:filmId/similar',
  Reviews = '/comments/:filmId',
  Promo = '/promo',
  FavoriteFilms = '/favorite',
  ToggleFavorite = '/favorite/:filmId/:status',
  PostReview = '/comments/:filmId',
}

export const EmptyFilm = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

export enum NameSpace {
  User = 'USER',
  Films = 'FILMS',
}
