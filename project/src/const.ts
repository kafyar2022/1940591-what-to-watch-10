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

export enum GenreType {
  ALL = 'All genres',
  COMEDIES = 'Comedies',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMAS = 'Dramas',
  HORROR = 'Horror',
  KIDS_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}
