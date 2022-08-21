import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilms, toggleFavorite } from '../../store/api-action';
import { Film } from '../../types/film';
import { IsAuthorized } from '../../util';

type ToggleFavoriteButtonProps = {
  film: Film;
}

function ToggleFavoriteButton({ film }: ToggleFavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { favoriteFilms } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    IsAuthorized()
      ?
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={() => dispatch(toggleFavorite({
          filmId: film.id,
          status: Number(!film.isFavorite),
        }))}
      >
        {
          film.isFavorite
            ?
            <svg viewBox="0 0 18 14" width={18} height={14}>
              <use xlinkHref="#in-list" />
            </svg>
            :
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref="#add" />
            </svg>
        }
        <span>My list</span>
        <span className="film-card__count">{favoriteFilms.length}</span>
      </button>
      :
      <Link className="btn btn--list film-card__button" to={AppRoute.Login}>
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
      </Link>
  );
}

export default ToggleFavoriteButton;
