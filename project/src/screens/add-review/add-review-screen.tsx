import { generatePath, Link, useParams } from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';
import MainLogo from '../../components/main-logo/main-logo';
import UserDetails from '../../components/user-details/user-details';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import NotFoundScreen from '../not-found/not-found';

function AddReviewScreen(): JSX.Element {
  const { currentFilm } = useAppSelector((state) => state);
  const params = useParams();

  return (
    currentFilm.id !== Number(params.id)
      ?
      <NotFoundScreen />
      :
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <MainLogo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    className="breadcrumbs__link"
                    to={generatePath(AppRoute.Film, { id: String(currentFilm.id) })}
                  >
                    {currentFilm.name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <div className="breadcrumbs__link">Add review</div>
                </li>
              </ul>
            </nav>

            <UserDetails />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={currentFilm.posterImage} alt={currentFilm.name} width={218} height={327} />
          </div>
        </div>

        <div className="add-review">
          <FormReview film={currentFilm} />
        </div>
      </section>
  );
}

export default AddReviewScreen;
