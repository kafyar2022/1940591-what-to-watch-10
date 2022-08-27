import { DEFAULT_GENRE, FILM_COUNT_PER_STEP, MAX_GENRES_COUNT } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setCurrentGenre, setRenderedFilmsCount } from '../../../store/films-slice/films-slice';
import { getCurrentGenre, getFilms } from '../../../store/films-slice/selector';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
  const genres = new Set<string>();

  films.forEach((film) => genres.size <= MAX_GENRES_COUNT && genres.add(film.genre));

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${currentGenre === DEFAULT_GENRE ? 'catalog__genres-item--active' : ''}`}>
        <button
          className="catalog__genres-link"
          onClick={() => {
            dispatch(setCurrentGenre(DEFAULT_GENRE));
            dispatch(setRenderedFilmsCount(FILM_COUNT_PER_STEP));
          }}
        >
          {DEFAULT_GENRE}
        </button>
      </li>
      {[...genres].map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}>
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(setCurrentGenre(genre));
              dispatch(setRenderedFilmsCount(FILM_COUNT_PER_STEP));
            }}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
