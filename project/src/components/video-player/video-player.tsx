import { useEffect, useRef } from 'react';
import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film;
  isPlaying: boolean;
}

function VideoPlayer({ film, isPlaying }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current && videoRef.current.play();
      return;
    }
    videoRef.current && videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={film.videoLink}
      poster={film.previewImage}
      width={280}
      height={175}
      muted
    >
    </video>
  );
}

export default VideoPlayer;
