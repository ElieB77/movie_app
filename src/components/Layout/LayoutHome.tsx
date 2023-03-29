import { MoviesResponseType, MoviesType } from "@/types/api/movies";
import { CardType, FeaturedCardType } from "@/types/card";
import styled from "styled-components";
import { FeaturedCard, Card } from "../Card";
import ScrollContainer from "react-indiana-drag-scroll";
import { Pagination } from "../Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";

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
        <CardContainer>
          <ScrollContainer className="scroll-container" horizontal>
            {props.popularMovies.results.map((movie: MoviesType) => {
              const featuredCardProps: FeaturedCardType = {
                poster_path: `${process.env.NEXT_PUBLIC_IMAGE_PATH}${movie.poster_path}`,
                alt: `${movie.title} Poster`,
                vote_average: movie.vote_average,
              };
              return <FeaturedCard key={movie.id} {...featuredCardProps} />;
            })}
          </ScrollContainer>
        </CardContainer>
      </section>

      <section>
        <h1>Top Rated Movies</h1>
        <TopRatedCardContainer>
          {data.map((movie: MoviesType) => {
            const cardProps: CardType = {
              poster_path: `${process.env.NEXT_PUBLIC_IMAGE_PATH}${movie.poster_path}`,
              alt: `${movie.title} Poster`,
              title: movie.title,
              release_date: movie.release_date
                ? movie.release_date.substring(0, 4)
                : "No date",
              vote_average:
                movie.vote_average > 0
                  ? Math.round(movie.vote_average * 10) / 10
                  : "No vote",
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

const CardContainer = styled.div`
  padding: 25px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & div {
    overflow-x: auto;
    display: flex;
    gap: 40px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopRatedCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 25px 0;
`;
