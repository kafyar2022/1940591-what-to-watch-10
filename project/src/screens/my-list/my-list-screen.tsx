import FilmList from '../../components/film-list/film-list';
import MainLogo from '../../components/main-logo/main-logo';
import UserDetails from '../../components/user-details/user-details';
import { useAppSelector } from '../../hooks';

/* eslint-disable jsx-a11y/anchor-is-valid */

function MyListScreen(): JSX.Element {
  const { films } = useAppSelector((state) => state);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <MainLogo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>

        <UserDetails />
      </header >
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div >
  );
}

export default MyListScreen;
