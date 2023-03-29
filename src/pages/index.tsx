import { LayoutHome } from "@/components/Layout";
import { getData, searchData } from "@/services/httpService";
import { MoviesResponseType } from "@/types/api/movies";
import { GetServerSideProps } from "next/types";

interface HomeProps {
  popularMovies: MoviesResponseType;
  topRatedMovies: MoviesResponseType;
  searchResults: any;
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <>
      <LayoutHome
        popularMovies={props.popularMovies}
        topRatedMovies={props.topRatedMovies}
        searchResults={props.searchResults}
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

  const searchResults: any = context.query.query
    ? await searchData<MoviesResponseType>(
        "/search/movie",
        context.query.query,
        Number(context.query.page) || undefined
      )
    : null;

  return {
    props: {
      topRatedMovies: topRatedMovies,
      popularMovies: popularMovies,
      searchResults: searchResults,
    },
  };
};
