import { MoviesResponseType, MoviesType } from "@/types/api/movies";
import { CardType } from "@/types/card";
import styled from "styled-components";
import { Card } from "../Card";
import { Pagination } from "../Pagination";
import "react-loading-skeleton/dist/skeleton.css";
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";
import { FeaturedMovies } from "../FeaturedMovies";

interface LayoutHomeProps {
  popularMovies: MoviesResponseType;
  topRatedMovies: MoviesResponseType;
  searchResults: MoviesResponseType;
}

export const LayoutHome = (props: LayoutHomeProps): JSX.Element => {
  const router = useRouter();

  const data = router.query.query
    ? props.searchResults.results
    : props.topRatedMovies.results;

  return (
    <>
      <SearchBar placeholder="Search for movies" />

      <section>
        <h1>Trending Movies</h1>
        <FeaturedMovies data={props.popularMovies.results} />
      </section>

      <section>
        <h1>Top Rated Movies</h1>
        <TopRatedCardContainer>
          {data.map((movie: MoviesType) => {
            const { id, poster_path, title, release_date, vote_average } =
              movie;

            const posterPath: string = poster_path
              ? `${process.env.NEXT_PUBLIC_IMAGE_PATH}${poster_path}`
              : "/images/default-poster.svg";
            const releaseDate: string = release_date
              ? release_date.substring(0, 4)
              : "No date";
            const voteAverageFormatted: number | string =
              vote_average > 0 ? Math.round(vote_average * 10) / 10 : "No vote";

            const cardProps: CardType = {
              id: id,
              poster_path: posterPath,
              alt: `${title} Poster`,
              title: title,
              release_date: releaseDate,
              vote_average: voteAverageFormatted,
            };
            return <Card key={movie.id} {...cardProps} />;
          })}
        </TopRatedCardContainer>
      </section>

      <Pagination
        total_pages={
          router.query.query
            ? props.searchResults.total_pages
            : props.topRatedMovies.total_pages
        }
        limit={250}
      />
    </>
  );
};

const TopRatedCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 25px 0;
`;
