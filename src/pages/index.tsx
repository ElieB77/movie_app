import { LayoutHome } from "@/component/Layout";
import { getData } from "@/services/httpService";
import { MoviesResponseType } from "@/types/api/movies";
import { GetStaticProps } from "next/types";

interface HomeProps {
  popularMovies: MoviesResponseType;
  topRatedMovies: MoviesResponseType;
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <>
      <LayoutHome
        popularMovies={props.popularMovies}
        topRatedMovies={props.topRatedMovies}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const popularMovies: MoviesResponseType = await getData<MoviesResponseType>(
    "/movie/popular"
  );

  const topRatedMovies: MoviesResponseType = await getData<MoviesResponseType>(
    "/movie/top_rated"
  );

  return {
    props: {
      popularMovies,
      topRatedMovies,
    },
  };
};
