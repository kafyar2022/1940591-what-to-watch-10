import { Fragment, useEffect } from 'react';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/UI/genre-list/genre-list';
import MainLogo from '../../components/main-logo/main-logo';
import PromoFilm from '../../components/UI/promo-film/promo-film';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilms } from '../../store/api-action';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { filteredFilms } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <Fragment>
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <FilmList films={filteredFilms} />
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

export default MainScreen;
