export interface FeaturedCardType {
  id?: number;
  title?: string;
  poster_path: string;
  alt: string;
  vote_average: number;
}

export interface CardType {
  id: number;
  poster_path: string;
  alt: string;
  title: string;
  release_date: number | string;
  vote_average: number | string;
}
