import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmReviews } from '../../store/api-action';
import { Film } from '../../types/film';
import { Review } from '../../types/reviews';

type FilmReviewsProps = {
  film: Film;
}

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {
  const { filmReviews } = useAppSelector((state) => state);
  const middleIndex = Math.ceil(filmReviews.length / 2);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmReviews(String(film.id)));
  }, [dispatch, film.id]);

  const renderComment = (comment: Review, i: number): JSX.Element => (
    <div key={i} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{comment.date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          middleIndex > 1
            ?
            filmReviews.splice(0, middleIndex).map((comment, i) => renderComment(comment, i))
            :
            filmReviews.map((comment, i) => renderComment(comment, i))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          middleIndex > 1
          &&
          filmReviews.splice(-middleIndex).map((comment, i) => renderComment(comment, i))
        }
      </div>
    </div>
  );
}

export default FilmReviews;
