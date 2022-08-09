import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<{ genre: string }>('films/changeGenre');

const getFilmsByGenre = createAction('films/filter');

export { changeGenre, getFilmsByGenre };
