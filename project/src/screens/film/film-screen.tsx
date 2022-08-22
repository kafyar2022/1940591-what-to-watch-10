import { Fragment, useEffect } from 'react';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import MainLogo from '../../components/main-logo/main-logo';
import ToggleFavoriteButton from '../../components/toggle-favorite-button/toggle-favorite-button';
import FilmTabs from '../../components/UI/film-tabs/film-tabs';
import UserDetails from '../../components/user-details/user-details';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchSimilarFilms } from '../../store/api-action';
import { IsAuthorized } from '../../util';
import FilmLoading from './film-loading';

function FilmScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();
  const { currentFilm, similarFilms } = useAppSelector((state) => state);
  const isAuthorized = IsAuthorized();

  useEffect(() => {
    dispatch(fetchFilm(params.id));
    dispatch(fetchSimilarFilms(params.id));
  }, [dispatch, params.id]);

  return (
    <Fragment>
      {
        currentFilm.id !== Number(params.id)
          ?
          <FilmLoading />
          :
          <section className="film-card film-card--full">
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
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

                    <ToggleFavoriteButton film={currentFilm} />

                    {
                      isAuthorized
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

                <FilmTabs film={currentFilm} />
              </div>
            </div>
          </section>
      }

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms} />
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
