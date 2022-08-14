import { Link } from 'react-router-dom';
import { AppRoute, DEFAULT_GENRE } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre, filterFilmsByGenre, resetRenderedFilmsCount } from '../../store/action';

type MainLogoProps = {
  footer?: boolean;
}

function MainLogo({ footer }: MainLogoProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="logo">
      <Link
        className={`logo__link ${footer && 'logo__link--light'}`}
        to={AppRoute.Main}
        onClick={() => {
          dispatch(changeGenre({ genre: DEFAULT_GENRE }));
          dispatch(filterFilmsByGenre());
          dispatch(resetRenderedFilmsCount());
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default MainLogo;
