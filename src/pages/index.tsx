import { LayoutHome } from "@/components/Layout";
import { fetchData, searchData } from "@/services/httpService";
import { MoviesResponseType } from "@/types/api/movies";
import { GetServerSideProps } from "next/types";

interface HomeProps {
  popularMovies: MoviesResponseType;
  topRatedMovies: MoviesResponseType;
  searchResults: MoviesResponseType;
}

export default function Home(props: HomeProps): JSX.Element {
  const { popularMovies, topRatedMovies, searchResults } = props;
  return (
    <>
      <LayoutHome
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        searchResults={searchResults}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const popularMovies: MoviesResponseType = await fetchData<MoviesResponseType>(
    "/movie/popular"
  );

  const topRatedMovies: MoviesResponseType =
    await fetchData<MoviesResponseType>(
      "/movie/top_rated",
      Number(context.query.page) || undefined
    );

  const searchResults: MoviesResponseType | undefined | "" =
    context.query.query &&
    (await searchData<MoviesResponseType>(
      "/search/movie",
      context.query.query,
      Number(context.query.page)
    ));

  return {
    props: {
      topRatedMovies: topRatedMovies,
      popularMovies: popularMovies,
      searchResults: searchResults || null,
    },
  };
};
