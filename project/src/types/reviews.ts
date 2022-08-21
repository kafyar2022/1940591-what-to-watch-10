export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type Reviews = Review[];

export type NewReviewData = {
  filmId: number;
  comment: string;
  rating: number;
}
