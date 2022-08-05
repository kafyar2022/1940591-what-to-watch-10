import { useRef, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: Film;
}

export default function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const videoPlayerPlayTimeDelay = 1000;
  const [isPlaying, setIsPlaying] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const smallFilmCardMouseEnterHandler = () => (timerId.current = setTimeout(() => setIsPlaying(true), videoPlayerPlayTimeDelay));

  const smallFilmCardMouseLeavehandler = () => {
    timerId.current && clearTimeout(timerId.current);
    setIsPlaying(false);
  };

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
        <Link to={generatePath(AppRoute.Film, { id: String(film.id) })} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article >
  );
}
