import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilms, toggleFavorite } from '../../store/api-action';
import { Film } from '../../types/film';

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
  );
}

export default ToggleFavoriteButton;
