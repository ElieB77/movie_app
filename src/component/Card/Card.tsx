import styled from "styled-components";
import Image from "next/image";

interface CardProps {
  title: string;
  poster_path: string;
  date: string;
  alt: string;
  width: number;
  height: number;
}

export const Card = (props: CardProps): JSX.Element => {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={props.poster_path} alt={props.alt} fill />
      </ImageWrapper>
      <div></div>
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
  & img {
  }
`;
