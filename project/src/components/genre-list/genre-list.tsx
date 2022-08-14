import { DEFAULT_GENRE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filterFilmsByGenre, resetRenderedFilmsCount } from '../../store/action';

type GenreListProps = {
  genres: string[];
}

function GenreList({ genres }: GenreListProps): JSX.Element {
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${currentGenre === DEFAULT_GENRE ? 'catalog__genres-item--active' : ''}`}>
        <button
          className="catalog__genres-link"
          onClick={() => {
            dispatch(changeGenre({ genre: DEFAULT_GENRE }));
            dispatch(filterFilmsByGenre());
            dispatch(resetRenderedFilmsCount());
          }}
        >
          {DEFAULT_GENRE}
        </button>
      </li>
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}>
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre({ genre }));
              dispatch(filterFilmsByGenre());
              dispatch(resetRenderedFilmsCount());
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
