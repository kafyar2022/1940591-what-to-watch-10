import { memo, useRef, useState } from 'react';
import { VIDEO_PLAY_TIME_DELAY } from '../../const';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  cardClickHandler: (film: Film) => void;
}

function FilmCard({ film, cardClickHandler }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const smallFilmCardMouseEnterHandler = () => (timerId.current = setTimeout(() => setIsPlaying(true), VIDEO_PLAY_TIME_DELAY));
  const smallFilmCardMouseLeavehandler = () => {
    timerId.current && clearTimeout(timerId.current);
    setIsPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={smallFilmCardMouseEnterHandler}
      onMouseLeave={smallFilmCardMouseLeavehandler}
      onClick={() => cardClickHandler(film)}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} isPlaying={isPlaying} />
      </div>

      <h3 className="small-film-card__title">
        <button className="small-film-card__link">{film.name}</button>
      </h3>
    </article >
  );
}

export default memo(FilmCard);
