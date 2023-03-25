import { MoviesResponseType, MoviesType } from "@/types/api/movies";
import { CardType, FeaturedCardType } from "@/types/card";
import styled from "styled-components";
import { FeaturedCard, Card } from "../Card";
import ScrollContainer from "react-indiana-drag-scroll";

// import React, { Component } from 'react'

// class Example extends Component {
//   render () {
//     return (
//       <ScrollContainer className="scroll-container">
//         { ... }
//       </ScrollContainer>
//     )
//   }
// }

interface LayoutHomeProps {
  popularMovies: MoviesResponseType;
  topRatedMovies: MoviesResponseType;
}

export const LayoutHome = (props: LayoutHomeProps): JSX.Element => {
  return (
    <>
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
          {props.topRatedMovies.results.map((movie: MoviesType) => {
            const cardProps: CardType = {
              poster_path: `${process.env.NEXT_PUBLIC_IMAGE_PATH}${movie.poster_path}`,
              alt: `${movie.title} Poster`,
              title: movie.title,
              release_date: movie.release_date.substring(0, 4),
              vote_average: movie.vote_average,
            };
            return <Card key={movie.id} {...cardProps} />;
          })}
        </TopRatedCardContainer>
      </section>
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
