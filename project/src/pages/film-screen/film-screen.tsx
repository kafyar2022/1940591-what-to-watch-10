import { Fragment, useEffect } from 'react';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import MainLogo from '../../components/main-logo/main-logo';
import Tabs from '../../components/tabs/tabs';
import UserDetails from '../../components/user-details/user-details';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchSimilarFilms } from '../../store/api-action';
import { IsAuthorized } from '../../util';
import NotFoundScreen from '../not-found/not-found';

function FilmScreen(): JSX.Element {
  const { currentFilm, similarFilms } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(params.id));
    dispatch(fetchSimilarFilms(params.id));
  }, [dispatch, params.id]);

  if (!params.id) {
    return <NotFoundScreen />;
  }

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

            <UserDetails />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>

              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(generatePath(AppRoute.Player, { id: String(currentFilm.id) }))}
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>

                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => navigate(AppRoute.MyList)}
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                {
                  IsAuthorized()
                  &&
                  <Link
                    className="btn film-card__button"
                    to={generatePath(AppRoute.AddReview, { id: String(currentFilm.id) })}
                  >
                    Add review
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={currentFilm.name} width={218} height={327} />
            </div>
            <Tabs film={currentFilm} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms} />
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
