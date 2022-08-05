import { useParams } from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';
import { Films } from '../../types/film';
import NotFoundScreen from '../not-found/not-found';

/* eslint-disable jsx-a11y/anchor-is-valid */
type AddReviewScreenProps = {
  films: Films;
}

function AddReviewScreen({ films }: AddReviewScreenProps): JSX.Element {
  const params = useParams();

  if (!params.id) {
    return <NotFoundScreen />;
  }

  const reviewFilm = films[films.findIndex((film) => (film.id === Number(params.id)))];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{reviewFilm.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
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
        <div className="film-card__poster film-card__poster--small">
          <img src={reviewFilm.cover} alt={reviewFilm.title} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <FormReview film={reviewFilm} />
      </div>
    </section>
  );
}

export default AddReviewScreen;
