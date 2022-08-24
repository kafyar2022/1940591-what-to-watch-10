import { Fragment, memo, useCallback } from 'react';
import { AppRoute, FILM_COUNT_PER_STEP } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import LoadMoreButton from '../../load-more-button/load-more-button';
import 'react-loading-skeleton/dist/skeleton.css';
import FilmCard from '../../film-card/film-card';
import { getRenderedFilmsCount } from '../../../store/films-slice/selector';
import { generatePath, useNavigate } from 'react-router-dom';
import { setRenderedFilmsCount } from '../../../store/films-slice/films-slice';
import { Film, Films } from '../../../types/film';

type FilmListFavoriteProps = {
  films: Films;
}

function FilmListFavorite({ films }: FilmListFavoriteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const renderedFilmsCount = useAppSelector(getRenderedFilmsCount);

  const cardClickHandler = useCallback((film: Film): void => {
    dispatch(setRenderedFilmsCount(FILM_COUNT_PER_STEP));
    navigate(generatePath(AppRoute.Film, { id: String(film.id) }));
  }, [dispatch, navigate]);

  return (
    <Fragment>
      <div className="catalog__films-list">
        {
          films.length !== 0
            ?
            Array.from({ length: Math.min(renderedFilmsCount, films.length) }, (_, i) => (
              <FilmCard
                key={i}
                film={films[i]}
                cardClickHandler={cardClickHandler}
              />
            ))
            :
            <p>No films is added to watchlist</p>
        }
      </div>

      {films.length > renderedFilmsCount && <LoadMoreButton />}
    </Fragment>
  );
}

export default memo(FilmListFavorite);
