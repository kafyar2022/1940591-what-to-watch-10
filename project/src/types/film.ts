export type Film = {
  id: number;
  title: string;
  poster: string;
  video: string;
  genre: string[];
  description: string;
  director: string;
  starring: string[];
  runTime: number;
  releaseDate: Date;
  rating: number;
  reviews: number[];
};

export type Films = Film[];
