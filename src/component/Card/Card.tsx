import { CardType } from "@/types/card";
import styled from "styled-components";
import Image from "next/image";

interface CardProps extends CardType {}

export const Card = (props: CardProps): JSX.Element => {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={props.poster_path} alt={props.alt} fill />
      </ImageWrapper>
      <InfoWrapper>
        <Info>
          <p>{props.release_date}</p>
          <span>|</span>
          <p>{props.vote_average}</p>
        </Info>
        <h3>{props.title}</h3>
      </InfoWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 280px;
  height: 226px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 174px;
  & img {
    border-radius: 8px;
  }
`;

const InfoWrapper = styled.div`
  gap: 50px;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 0;
  & p {
    opacity: 0.75;
    font-size: 13px;
  }
`;
