import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-slice/selector';
import { formatPlayerDuration } from '../../util';
import NotFoundScreen from '../not-found/not-found';

function PlayerScreen(): JSX.Element {
  const navigate = useNavigate();
  const films = useAppSelector(getFilms);
  const params = useParams();
  const playFilm = films.find((film) => film.id === Number(params.id));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [durationTime, setDurationTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, videoRef]);

  const fullScreenClickHandler = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const progressChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const setProgressChange = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / 100) * setProgressChange;
      setCurrentTime(setProgressChange);
    }
  };

  return (
    !playFilm
      ?
      <NotFoundScreen />
      :
      <div className="player">
        <video
          className="player__video"
          ref={videoRef}
          src={playFilm.videoLink}
          autoPlay
          onLoadStart={() => setIsloading(true)}
          onLoadedData={() => setIsloading(false)}
          onLoadedMetadata={(evt) => {
            setDurationTime(evt.currentTarget.duration);
            setIsPlaying(true);
          }}
          onTimeUpdate={(evt) => setCurrentTime(evt.currentTarget.currentTime)}
          onSeeking={() => setIsloading(true)}
          onSeeked={() => setIsloading(false)}
        />

        {
          isLoading &&
          <svg width={300} height={300} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          >
            <use xlinkHref="#spinner" />
          </svg>
        }

        <button
          className="player__exit"
          type="button"
          onClick={() => navigate(-1)}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={Math.floor(currentTime * 100 / durationTime)}
                max={100}
              />
              <input
                className="player__progress player__progress--input"
                style={{
                  left: `${currentTime * 100 / durationTime}%`,
                }}
                type="range"
                min="0"
                max="100"
                value={Math.floor(currentTime * 100 / durationTime)}
                onChange={(evt) => progressChangeHandler(evt)}
              />
            </div>

            <div className="player__time-value">{formatPlayerDuration(durationTime - currentTime)}</div>
          </div>

          <div className="player__controls-row">
            <button
              className="player__play"
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <svg viewBox="0 0 19 19" width={19} height={19}>
                {
                  isPlaying
                    ? <use xlinkHref="#pause"></use>
                    : <use xlinkHref="#play-s"></use>
                }
              </svg>
              <span>Play</span>
            </button>

            <div className="player__name">{playFilm.name}</div>

            <button
              className="player__full-screen"
              type="button"
              onClick={fullScreenClickHandler}
            >
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div >
  );
}

export default PlayerScreen;
