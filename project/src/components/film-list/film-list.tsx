import { Films } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  films: Films;
}

export default function FilmList({ films }: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        <SmallFilmCard key={film.id} film={film} />
      )}
    </div>
  );
}
