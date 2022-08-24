import { useEffect } from 'react';
import FilmListFavorite from '../../components/film-list/favorite/film-list-favorite';
import MainLogo from '../../components/main-logo/main-logo';
import UserDetails from '../../components/user-details/user-details';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilms } from '../../store/api-action';
import { getFavoriteFilms } from '../../store/films-slice/selector';

function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <MainLogo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>

        <UserDetails />
      </header >

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmListFavorite films={films} />
      </section>

      <footer className="page-footer">
        <MainLogo footer />

        <div className="copyright">
          <p>© 2022 What to watch Ltd.</p>
        </div>
      </footer>
    </div >
  );
}

export default MyListScreen;
