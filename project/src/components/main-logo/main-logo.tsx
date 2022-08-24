import { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, DEFAULT_GENRE, FILM_COUNT_PER_STEP } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCurrentGenre, setRenderedFilmsCount } from '../../store/films-slice/films-slice';

type MainLogoProps = {
  footer?: boolean;
  disabled?: boolean;
}

function MainLogo({ footer, disabled }: MainLogoProps): JSX.Element {
  const dispatch = useAppDispatch();

  const renderLogo = (): JSX.Element => (
    <Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Fragment>
  );

  return (
    <div className="logo">
      {
        disabled
          ?
          <div className={`logo__link ${footer ? 'logo__link--light' : ''}`}>
            {renderLogo()}
          </div>
          :
          <Link
            className={`logo__link ${footer ? 'logo__link--light' : ''}`}
            to={AppRoute.Main}
            onClick={() => {
              dispatch(setCurrentGenre(DEFAULT_GENRE));
              dispatch(setRenderedFilmsCount(FILM_COUNT_PER_STEP));
            }}
          >
            {renderLogo()}
          </Link>
      }
    </div>
  );
}

export default memo(MainLogo);
