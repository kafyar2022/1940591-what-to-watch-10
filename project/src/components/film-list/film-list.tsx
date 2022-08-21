import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FILM_COUNT_PER_STEP } from '../../const';
import { useAppSelector } from '../../hooks';
import { Films } from '../../types/film';
import LoadMoreButton from '../load-more-button/load-more-button';
import 'react-loading-skeleton/dist/skeleton.css';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
}

function FilmList({ films }: FilmListProps): JSX.Element {
  const { renderedFilmsCount } = useAppSelector((state) => state);

  return (
    <Fragment>
      <div className="catalog__films-list">
        {
          films.length !== 0
            ?
            Array.from({ length: Math.min(renderedFilmsCount, films.length) }, (_, i) => <FilmCard key={i} film={films[i]} />)
            :
            Array.from({ length: FILM_COUNT_PER_STEP }, (_, i) => (
              <article key={i} className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <Skeleton width={280} height={175} />
                </div>
              </article>
            ))
        }
      </div>

      {films.length > renderedFilmsCount && <LoadMoreButton />}
    </Fragment>
  );
}

export default FilmList;
