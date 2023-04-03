import styled from "styled-components";
import Image from "next/image";
import { MoviesDetailsType } from "@/types/api/movies";
import { ButtonBack } from "../Button";

interface CoverProps extends MoviesDetailsType {}

export const Cover = (props: CoverProps): JSX.Element => {
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    overview,
    genres,
  } = props;

  return (
    <Container>
      <ButtonBack />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${backdrop_path}`}
        alt={`${title} Cover Image`}
        fill
      />
      <Info>
        <PosterWrapper>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${poster_path}`}
            alt={`${title} Poster Image`}
            fill
          />
        </PosterWrapper>
        <Details>
          <h1>
            {title} ({release_date.substring(0, 4)})
          </h1>
          <p>
            <span>{release_date?.replace(/-/g, "/")}</span>
            <span> - </span>
            <span>{genres.map((genre: any) => genre.name).join(", ")}</span>
            <span> - </span>
            <span>{Math.floor(runtime / 60) + "h " + (runtime % 60)}</span>
          </p>

          <Overview>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Overview>
        </Details>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
  & img {
    object-fit: cover;
  }
  & img:not(:last-child) {
    filter: brightness(15%);
  }
  & button {
    position: absolute;
    z-index: 100;
    top: 10px;
    left: 10px;
  }
`;

const Info = styled.div`
  position: absolute;
  display: flex;
  width: 70%;
  gap: 50px;
`;

const PosterWrapper = styled.div`
  position: relative;
  min-width: 300px;
  height: 500px;
  & img {
    border-radius: 8px;
  }
`;

const Details = styled.div`
  padding: 50px 0;
  width: 600px;
`;

const Overview = styled.div`
  margin-top: 50px;
`;
