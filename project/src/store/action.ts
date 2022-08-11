import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<{ genre: string }>('films/changeGenre');

const filterFilmsByGenre = createAction('films/filter');

const resetRenderedFilmsCount = createAction('films/resetCount');

const loadMoreFilms = createAction('films/loadMore');

export { changeGenre, filterFilmsByGenre, resetRenderedFilmsCount, loadMoreFilms };
