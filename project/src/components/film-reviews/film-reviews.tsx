import { Film } from '../../types/film';
import { Review, Reviews } from '../../types/reviews';

type FilmReviewsProps = {
  film: Film;
}

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {
  const comments: Reviews = [];
  const middleIndex = Math.ceil(comments.length / 2);
  const firstHalf = comments.splice(0, middleIndex);
  const secondHalf = comments.splice(-middleIndex);

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
        {firstHalf.map((comment, i) => renderComment(comment, i))}
      </div>
      <div className="film-card__reviews-col">
        {secondHalf.map((comment, i) => renderComment(comment, i))}
      </div>
    </div>
  );
}

export default FilmReviews;
