import { useDispatch } from 'react-redux';
import { incrementRenderedFilmsCount } from '../../store/films-slice/films-slice';

function LoadMoreButton(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(incrementRenderedFilmsCount())}
      >
        Show more
      </button>
    </div>
  );
}

export default LoadMoreButton;
