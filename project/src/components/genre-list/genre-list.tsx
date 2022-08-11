import { GenreType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filterFilmsByGenre, resetRenderedFilmsCount } from '../../store/action';

function GenreList(): JSX.Element {
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {Array.from(Object.entries(GenreType), (genre, i) => (
        <li key={i} className={`catalog__genres-item ${genre[1] === currentGenre ? 'catalog__genres-item--active' : ''}`}>
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre({ genre: genre[1] }));
              dispatch(filterFilmsByGenre());
              dispatch(resetRenderedFilmsCount());
            }}
          >
            {genre[1]}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
