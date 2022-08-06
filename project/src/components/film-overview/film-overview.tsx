import { Film } from '../../types/film';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({ film }: FilmOverviewProps): JSX.Element {
  return (
    <div className="film-card__text">
      <p>{film.description}</p>
      <p className="film-card__director"><strong>Director: {film.director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {film.starring.map((star) => star).join(', ')}</strong></p>
    </div>
  );
}

export default FilmOverview;
