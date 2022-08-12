/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from 'dayjs';
import { Fragment } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import MainLogo from '../../components/main-logo/main-logo';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function MainScreen(): JSX.Element {
  const navigate = useNavigate();

  const films = useAppSelector((state) => state.filteredFilms);
  const allFilms = useAppSelector((state) => state.films);
  const promoFilm = allFilms[0];
  const genres = new Set<string>();
  allFilms.forEach((film) => genres.add(film.genre));

  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.previewImage} alt={promoFilm.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">

          <MainLogo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.previewImage} alt={promoFilm.name} width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{[...promoFilm.genre]}</span>
                <span className="film-card__year">{dayjs(promoFilm.released).format('YYYY')}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(generatePath(AppRoute.Player, { id: String(promoFilm.id) }))}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genres={[...genres]} />

          <FilmList films={films} />

        </section>
        <footer className="page-footer">

          <MainLogo footer />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default MainScreen;
