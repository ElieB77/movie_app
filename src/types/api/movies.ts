export interface MoviesType {
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponseType {
  page: number;
  results: MoviesType[];
  total_pages: number;
  total_results: number;
}

export interface MoviesDetailsType {
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: string[];
}
