import { LayoutHome } from "@/component/Layout";
import { getData } from "@/services/httpService";
import { GetStaticProps } from "next/types";

interface HomeProps {
  movies: any;
}

export default function Home(props: HomeProps): JSX.Element {
  console.log(props.movies);

  return (
    <>
      <LayoutHome movies={props.movies} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const movies = await getData("/movie/popular");

  return {
    props: {
      movies,
    },
  };
};
