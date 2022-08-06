import dayjs from 'dayjs';
import { reviews } from '../../mock/reviews';
import { Film } from '../../types/film';
import { Review } from '../../types/reviews';

type FilmReviewsProps = {
  film: Film;
}

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {
  const comments = reviews.filter((review: Review) => film.reviews.includes(review.id));
  const middleIndex = Math.ceil(comments.length / 2);
  const firstHalf = comments.splice(0, middleIndex);
  const secondHalf = comments.splice(-middleIndex);

  const renderComment = (comment: Review): JSX.Element => (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.review}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.author}</cite>
          <time className="review__date" dateTime={dayjs(comment.createdDate).format('YYYY-MM-DD')}>{dayjs(comment.createdDate).format('MMMM DD YYYY')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstHalf.map((comment) => renderComment(comment))}
      </div>
      <div className="film-card__reviews-col">
        {secondHalf.map((comment) => renderComment(comment))}
      </div>
    </div>
  );
}

export default FilmReviews;
