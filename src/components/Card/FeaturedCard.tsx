import styled from "styled-components";
import Image from "next/image";
import { FeaturedCardType } from "@/types/card";

interface FeaturedCardProps extends FeaturedCardType {}

export const FeaturedCard = (props: FeaturedCardProps): JSX.Element => {
  const { poster_path, alt, vote_average } = props;
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={poster_path} alt={alt} fill priority />
        <VoteAverage>
          <p>{vote_average}</p>
        </VoteAverage>
      </ImageWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  min-width: 470px;
  height: 230px;
  overflow: hidden;
  border-radius: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VoteAverage = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: ${(props) => props.theme.colors.primary_dark};
  border-radius: 50%;
  border: solid 5px ${(props) => props.theme.colors.secondary_light};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
