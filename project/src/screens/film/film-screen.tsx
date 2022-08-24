import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmListSimilar from '../../components/film-list/similar/film-list-similar';
import MainLogo from '../../components/main-logo/main-logo';
import CurrentFilm from '../../components/UI/current-film/current-film';
import { useAppDispatch } from '../../hooks';
import { fetchFilmById, fetchSimilarFilms } from '../../store/api-action';

function FilmScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchFilmById(params.id));
    dispatch(fetchSimilarFilms(params.id));
  }, [dispatch, params.id]);

  return (
    <Fragment>
      <CurrentFilm filmId={Number(params.id)} />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmListSimilar />
        </section>

        <footer className="page-footer">
          <MainLogo footer />

          <div className="copyright">
            <p>© 2022 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default FilmScreen;
