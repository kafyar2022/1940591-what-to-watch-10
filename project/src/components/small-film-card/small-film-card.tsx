import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type SmallFilmCardProps = {
  film: Film;
  onVideo: () => void;
}

export default function SmallFilmCard({ film, onVideo }: SmallFilmCardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={onVideo} onClick={() => navigate(generatePath(AppRoute.Film, { id: String(film.id) }))}>
        <img src={film.cover} alt={film.title} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath(AppRoute.Film, { id: String(film.id) })} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}
