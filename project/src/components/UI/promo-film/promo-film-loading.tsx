import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MainLogo from '../../main-logo/main-logo';
import UserDetails from '../../user-details/user-details';

function PromoFilmLoading(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg"></div>

      <header className="page-header film-card__head">
        <MainLogo />

        <UserDetails />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <Skeleton width="100%" height="100%" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">
              <Skeleton width="50%" />
            </h2>

            <p className="film-card__meta">
              <Skeleton width={120} height={20} />
            </p>

            <div className="film-card__buttons" style={{ minHeight: 46 }}>
              <span className="btn btn--play film-card__button"></span>
              <span className="btn btn--list film-card__button"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmLoading;
