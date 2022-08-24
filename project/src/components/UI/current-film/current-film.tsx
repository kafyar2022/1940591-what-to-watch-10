import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getCurrentFilm } from '../../../store/films-slice/selector';
import { getAuthorizationStatus } from '../../../store/user-slice/selector';
import MainLogo from '../../main-logo/main-logo';
import ToggleFavoriteButton from '../../toggle-favorite-button/toggle-favorite-button';
import UserDetails from '../../user-details/user-details';
import FilmTabs from '../film-tabs/film-tabs';
import FilmLoading from './film-loading';

type CurrentFilmProps = {
  filmId: number;
}

function CurrentFilm({ filmId }: CurrentFilmProps): JSX.Element {
  const navigate = useNavigate();
  const currentFilm = useAppSelector(getCurrentFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    currentFilm.id === 0 && currentFilm.id !== Number(filmId)
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

                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ?
                    <ToggleFavoriteButton film={currentFilm} />
                    :
                    <Link className="btn btn--list film-card__button" to={AppRoute.Login}>
                      <svg viewBox="0 0 19 20" width={19} height={20}>
                        <use xlinkHref="#add" />
                      </svg>
                      <span>My list</span>
                    </Link>
                }

                {
                  authorizationStatus === AuthorizationStatus.Auth
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
  );
}

export default CurrentFilm;
