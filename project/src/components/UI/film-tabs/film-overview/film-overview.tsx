import { Fragment } from 'react';
import { Film } from '../../../../types/film';
import { getFilmRatingText } from '../../../../util';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({ film }: FilmOverviewProps): JSX.Element {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRatingText(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.map((star) => star).join(', ')}</strong></p>
      </div>
    </Fragment>
  );
}

export default FilmOverview;
