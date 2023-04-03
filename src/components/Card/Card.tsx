import { CardType } from "@/types/card";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "../Bookmark";

interface CardProps extends CardType {}

export const Card = (props: CardProps): JSX.Element => {
  const { id, title, poster_path, alt, release_date, vote_average } = props;

  return (
    <Link
      href={`movie/${id}`}
      as={`movie/${id}-${title.toLowerCase().replace(/[\s,]+/g, "-")}`}
    >
      <CardContainer>
        <BookmarkWrapper>
          <Bookmark isBookmarked={true} {...props} />
        </BookmarkWrapper>
        <ImageWrapper>
          <Image src={poster_path} alt={alt} fill />
        </ImageWrapper>
        <InfoWrapper>
          <Info>
            <p>{release_date}</p>
            <span>|</span>
            <p>{vote_average}</p>
          </Info>
          <h3>{title}</h3>
        </InfoWrapper>
      </CardContainer>
    </Link>
  );
};

const CardContainer = styled.div`
  width: 280px;
  height: 226px;
  position: relative;
`;

const BookmarkWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
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
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  & p {
    font-size: 13px;
  }
`;
