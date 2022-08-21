import { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchPromoFilm } from '../../../store/api-action';
import MainLogo from '../../main-logo/main-logo';
import ToggleFavoriteButton from '../../toggle-favorite-button/toggle-favorite-button';
import UserDetails from '../../user-details/user-details';
import PromoFilmLoading from './promo-film-loading';

function PromoFilm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { promoFilm } = useAppSelector((state) => state);

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

        <header className="page-header film-card__head">
          <MainLogo />

          <UserDetails />
        </header>

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

                <ToggleFavoriteButton film={promoFilm} />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default PromoFilm;
