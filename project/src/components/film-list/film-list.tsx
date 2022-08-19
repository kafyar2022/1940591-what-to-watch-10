import { Fragment } from 'react';
import { useAppSelector } from '../../hooks';
import { Films } from '../../types/film';
import LoadMoreButton from '../load-more-button/load-more-button';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  films: Films;
}

function FilmList({ films }: FilmListProps): JSX.Element {
  const { renderedFilmsCount } = useAppSelector((state) => state);

  return (
    <Fragment>
      <div className="catalog__films-list">
        {Array.from({ length: Math.min(renderedFilmsCount, films.length) }, (_, i) => <SmallFilmCard key={i} film={films[i]} />)}
      </div>

      {films.length > renderedFilmsCount && <LoadMoreButton />}
    </Fragment>
  );
}

export default FilmList;
