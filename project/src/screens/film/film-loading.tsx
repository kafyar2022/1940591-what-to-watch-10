import Skeleton from 'react-loading-skeleton';
import MainLogo from '../../components/main-logo/main-logo';
import UserDetails from '../../components/user-details/user-details';
import 'react-loading-skeleton/dist/skeleton.css';

function FilmLoading(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg"></div>

        <header className="page-header film-card__head">
          <MainLogo />

          <UserDetails />
        </header>

        <div className="film-card__wrap">
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

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <Skeleton width="100%" height="100%" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <button className="film-nav__link">Overview</button>
                </li>
                <li className="film-nav__item">
                  <button className="film-nav__link">Details</button>
                </li>
                <li className="film-nav__item">
                  <button className="film-nav__link">Reviews</button>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <Skeleton className="film-rating__score" width={250} height={30} />
            </div>

            <div className="film-card__text">
              <p>
                <Skeleton count={2} />
                <Skeleton width="60%" />
              </p>
              <p className="film-card__director">
                <Skeleton width="40%" />
              </p>
              <p className="film-card__starring">
                <Skeleton />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmLoading;
