/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from 'dayjs';
import { Fragment } from 'react';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import MainLogo from '../../components/main-logo/main-logo';
import Tabs from '../../components/tabs/tabs';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import NotFoundScreen from '../not-found/not-found';

function FilmScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filteredFilms);
  const navigate = useNavigate();
  const params = useParams();

  if (!params.id) {
    return <NotFoundScreen />;
  }

  const showFilm = films[films.findIndex((film) => (film.id === Number(params.id)))];

  return (
    <Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
            <div className="film-card__desc">
              <h2 className="film-card__title">{showFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{showFilm.genre}</span>
                <span className="film-card__year">{dayjs(showFilm.releaseDate).format('YYYY')}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(generatePath(AppRoute.Player, { id: String(showFilm.id) }))}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => navigate(AppRoute.MyList)}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link className="btn film-card__button" to={generatePath(AppRoute.AddReview, { id: String(showFilm.id) })}>Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={showFilm.cover} alt={showFilm.title} width={218} height={327} />
            </div>
            <Tabs film={showFilm} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
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

export default FilmScreen;
