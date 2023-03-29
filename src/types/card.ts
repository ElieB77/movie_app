export interface FeaturedCardType {
  poster_path: string;
  alt: string;
  vote_average: number;
}

export interface CardType {
  poster_path: string;
  alt: string;
  title: string;
  release_date: number | string;
  vote_average: number | string;
}
