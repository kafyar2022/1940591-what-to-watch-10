import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { MAX_COMMENT_LENGTH, MIM_COMMENT_LENGTH } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { postNewReview } from '../../../store/api-action';
import { Film } from '../../../types/film';
const maxRating = 10;

type FormReviewProps = {
  film: Film;
}

function FormReview({ film }: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    comment: '',
    rating: 0,
  });

  const formChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const formSubmitHandler = (evt: FormEvent): void => {
    evt.preventDefault();

    dispatch(postNewReview({
      filmId: film.id,
      comment: form.comment,
      rating: form.rating,
    }));
  };

  const createRatingStars = (): JSX.Element[] => Array.from({ length: maxRating }, (_, i) => {
    const rating = maxRating - i;

    return (
      <Fragment key={rating}>
        <input
          className="rating__input"
          id={`star-${rating}`}
          type="radio"
          name="rating"
          defaultValue={rating}
          defaultChecked={Math.round(form.rating) === rating}
          onChange={formChangeHandler}
        />
        <label
          className="rating__label"
          htmlFor={`star-${rating}`}
        >
          Rating {rating}
        </label>
      </Fragment>
    );
  });

  return (
    <form
      className="add-review__form"
      onSubmit={formSubmitHandler}
    >
      <div className="rating">
        <div className="rating__stars">
          {createRatingStars()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          placeholder="Review text"
          defaultValue={form.comment}
          onChange={formChangeHandler}
        />

        <div className="add-review__submit">
          {
            form.comment.length < MIM_COMMENT_LENGTH && form.comment.length !== 0
            && <span style={{ color: 'red', fontSize: '14px', marginRight: 'auto' }}>Minimun {MIM_COMMENT_LENGTH} characters ({form.comment.length})</span>
          }
          {
            form.comment.length > MAX_COMMENT_LENGTH
            && <span style={{ color: 'red', fontSize: '14px', marginRight: 'auto' }}>Maximun {MAX_COMMENT_LENGTH} characters ({form.comment.length})</span>
          }

          <button
            className="add-review__btn"
            type="submit"
            disabled={form.rating === 0 || form.comment.length < MIM_COMMENT_LENGTH || form.comment.length > MAX_COMMENT_LENGTH}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormReview;
