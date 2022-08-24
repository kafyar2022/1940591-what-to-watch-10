import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchFilmReviews } from '../../../../store/api-action';
import { getFilmReviews } from '../../../../store/films-slice/selector';
import { Film } from '../../../../types/film';
import { Review } from '../../../../types/reviews';

type FilmReviewsProps = {
  film: Film;
}

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const filmReviews = useAppSelector(getFilmReviews);
  const firstHalf = filmReviews.filter((_, index) => index % 2 === 0);
  const secondHalf = filmReviews.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    dispatch(fetchFilmReviews(String(film.id)));
  }, [dispatch, film.id]);

  const renderComment = (comment: Review, i: number): JSX.Element => (
    <div key={i} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={dayjs(comment.date).format('YYYY-MM-DD HH:mm:ss')}>
            {dayjs(comment.date).format('MMMM DD, YYYY')}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstHalf.map((comment, i) => renderComment(comment, i))}
      </div>

      <div className="film-card__reviews-col">
        {secondHalf.map((comment, i) => renderComment(comment, i))}
      </div>
    </div>
  );
}

export default FilmReviews;
