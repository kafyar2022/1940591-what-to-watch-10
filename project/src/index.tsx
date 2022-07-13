import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  PROMO_FILM: {
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    releaseDate: '2014',
  },
  FILMS_COUNT: 20,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilm={Setting.PROMO_FILM}
      filmsCount={Setting.FILMS_COUNT}
    />
  </React.StrictMode>,
);
