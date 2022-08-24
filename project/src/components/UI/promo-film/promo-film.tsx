import { memo, useEffect } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchPromoFilm } from '../../../store/api-action';
import { getPromoFilm } from '../../../store/films-slice/selector';
import { getAuthorizationStatus } from '../../../store/user-slice/selector';
import ToggleFavoriteButton from '../../toggle-favorite-button/toggle-favorite-button';
import PromoFilmLoading from './promo-film-loading';

type PromoFilmProps = {
  children: JSX.Element;
}

function PromoFilm({ children }: PromoFilmProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  return (
    promoFilm.id === 0
      ?
      <PromoFilmLoading />
      :
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        {children}

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width={218} height={327} />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>

              <p className="film-card__meta">
                <span className="film-card__genre">{[...promoFilm.genre]}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(generatePath(AppRoute.Player, { id: String(promoFilm.id) }))}
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ?
                    <ToggleFavoriteButton film={promoFilm} />
                    :
                    <Link className="btn btn--list film-card__button" to={AppRoute.Login}>
                      <svg viewBox="0 0 19 20" width={19} height={20}>
                        <use xlinkHref="#add" />
                      </svg>
                      <span>My list</span>
                    </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default memo(PromoFilm);
