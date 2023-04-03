import { LayoutDetails } from "@/components/Layout";
import { fetchDataById } from "@/services/httpService";
import { MoviesDetailsType } from "@/types/api/movies";
import { GetServerSideProps } from "next";

interface MovieByIdProps {
  movie: MoviesDetailsType;
}

export default function MovieById(props: MovieByIdProps): JSX.Element {
  return <LayoutDetails data={props.movie} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movie: MoviesDetailsType = await fetchDataById<MoviesDetailsType>(
    "/movie",
    context.params?.id as string
  );

  return {
    props: { movie },
  };
};
