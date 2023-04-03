import { FeaturedCardType } from "@/types/card";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { FeaturedCard } from "../Card";

interface FeaturedMoviesProps {
  data: any;
}

export const FeaturedMovies = (props: FeaturedMoviesProps): JSX.Element => {
  const { data } = props;
  return (
    <CardContainer>
      <ScrollContainer className="scroll-container" horizontal>
        {data.map((movie: FeaturedCardType) => {
          const { title, poster_path, id, vote_average } = movie;
          const featuredCardProps: FeaturedCardType = {
            poster_path: `${process.env.NEXT_PUBLIC_IMAGE_PATH}${poster_path}`,
            alt: `${title} Poster`,
            vote_average: vote_average,
          };
          return <FeaturedCard key={id} {...featuredCardProps} />;
        })}
      </ScrollContainer>
    </CardContainer>
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
