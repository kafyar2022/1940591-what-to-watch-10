export const FILM_COUNT_PER_STEP = 8;
export const VIDEO_PLAY_TIME_DELAY = 1000;
export const DEFAULT_GENRE = 'All genres';


export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
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
}
