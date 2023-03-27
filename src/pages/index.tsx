import { LayoutHome } from "@/components/Layout";
import { getData } from "@/services/httpService";
import { MoviesResponseType } from "@/types/api/movies";
import { GetServerSideProps } from "next/types";

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
        total_pages={props.topRatedMovies.total_pages}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const popularMovies: MoviesResponseType = await getData<MoviesResponseType>(
    "/movie/popular"
  );

  const topRatedMovies: MoviesResponseType = await getData<MoviesResponseType>(
    "/movie/top_rated",
    Number(context.query.page) || undefined
  );

  return {
    props: { topRatedMovies: topRatedMovies, popularMovies: popularMovies },
  };
};
