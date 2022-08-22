import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute, VIDEO_PLAY_TIME_DELAY } from '../../const';
import { resetRenderedFilmsCount } from '../../store/action';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const smallFilmCardMouseEnterHandler = () => (timerId.current = setTimeout(() => setIsPlaying(true), VIDEO_PLAY_TIME_DELAY));
  const smallFilmCardMouseLeavehandler = () => {
    timerId.current && clearTimeout(timerId.current);
    setIsPlaying(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={smallFilmCardMouseEnterHandler}
      onMouseLeave={smallFilmCardMouseLeavehandler}
      onClick={() => {
        dispatch(resetRenderedFilmsCount());
        navigate(generatePath(AppRoute.Film, { id: String(film.id) }));
      }}
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

export default FilmCard;
