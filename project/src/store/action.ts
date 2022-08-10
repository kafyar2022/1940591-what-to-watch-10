import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<{ genre: string }>('films/changeGenre');

const filterFilmsByGenre = createAction('films/filter');

export { changeGenre, filterFilmsByGenre };
