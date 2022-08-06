export type Review = {
  id: number;
  author: string;
  review: string;
  rating: number;
  createdDate: Date;
};

export type Reviews = Review[];
