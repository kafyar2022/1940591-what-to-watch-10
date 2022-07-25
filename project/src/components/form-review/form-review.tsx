import { ChangeEvent, Fragment, useState } from 'react';
import { Film } from '../../types/film';
const maxRating = 10;

type FormReviewProps = {
  film: Film;
}

export default function FormReview({ film }: FormReviewProps): JSX.Element {
  const [form, setForm] = useState({
    id: film.id,
    rating: film.rating,
    reviewText: ''
  });

  const formChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const createRatingStars = (): JSX.Element[] => Array.from({ length: maxRating }, (_, i) => {
    const rating = maxRating - i;

    return (
      <Fragment key={rating}>
        <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" defaultValue={rating} defaultChecked={Math.round(form.rating) === rating} onChange={formChangeHandler} />
        <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
      </Fragment>
    );
  });
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {createRatingStars()}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={form.reviewText} onChange={formChangeHandler} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
