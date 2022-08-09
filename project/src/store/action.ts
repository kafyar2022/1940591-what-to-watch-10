import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<{ genre: string }>('films/changeGenre');

const filterFilms = createAction('films/filter');

export { changeGenre, filterFilms };
