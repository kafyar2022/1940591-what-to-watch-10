import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, VIDEO_PLAY_TIME_DELAY } from '../../const';
import { resetRenderedFilmsCount } from '../../store/action';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: Film;
}

export default function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const smallFilmCardMouseEnterHandler = () => (timerId.current = setTimeout(() => setIsPlaying(true), VIDEO_PLAY_TIME_DELAY));

  const smallFilmCardMouseLeavehandler = () => {
    timerId.current && clearTimeout(timerId.current);
    setIsPlaying(false);
  };

  const dispatch = useDispatch();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={smallFilmCardMouseEnterHandler}
      onMouseLeave={smallFilmCardMouseLeavehandler}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} isPlaying={isPlaying} />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={generatePath(AppRoute.Film, { id: String(film.id) })}
          onClick={() => dispatch(resetRenderedFilmsCount())}
        >
          {film.title}
        </Link>
      </h3>
    </article >
  );
}
