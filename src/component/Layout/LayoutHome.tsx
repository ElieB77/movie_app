import { CardType } from "@/types/card";
import styled from "styled-components";
import { Card } from "../Card";

interface LayoutHomeProps {
  movies: any;
}

export const LayoutHome = (props: LayoutHomeProps): JSX.Element => {
  return (
    <>
      <h1>Trending</h1>
      <CardContainer>
        {props.movies.results.map((movie: CardType) => {
          console.log(movie.poster_path);
          return (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${movie.poster_path}`}
              date={movie.release_date}
              alt={`${movie.title} Poster`}
              width={500}
              height={750}
            />
          );
        })}
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  padding: 25px 0;
`;
