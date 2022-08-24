import { Fragment, useEffect } from 'react';
import GenreList from '../../components/UI/genre-list/genre-list';
import MainLogo from '../../components/main-logo/main-logo';
import PromoFilm from '../../components/UI/promo-film/promo-film';
import { useAppDispatch } from '../../hooks';
import { fetchFilms } from '../../store/api-action';
import UserDetails from '../../components/user-details/user-details';
import FilmListFiltered from '../../components/film-list/filtered/film-list-filtered';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <Fragment>
      <PromoFilm>
        <header className="page-header film-card__head">
          <MainLogo disabled />

          <UserDetails />
        </header>
      </PromoFilm>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <FilmListFiltered />
        </section>

        <footer className="page-footer">
          <MainLogo footer disabled />

          <div className="copyright">
            <p>© 2022 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default MainScreen;
