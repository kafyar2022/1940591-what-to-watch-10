export const getFilmRatingText = (rating: number): string => {
  switch (true) {
    case rating < 3:
      return 'Bad';

    case rating >= 3 && rating < 5:
      return 'Normal';

    case rating >= 5 && rating < 8:
      return 'Good';

    case rating >= 8 && rating < 10:
      return 'Very good';

    default:
      return 'Awesome';
  }
};

export const formatDuration = (minutes: number): string => {
  if (minutes > 59) {
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

export const formatPlayerDuration = (seconds: number): string => {
  const result = new Date(seconds * 1000).toISOString().slice(11, 19);

  return result;
};
