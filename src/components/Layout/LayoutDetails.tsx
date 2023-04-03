import { MoviesDetailsType } from "@/types/api/movies";
import { Cover } from "../Cover";

interface LayoutDetailsProps {
  data: MoviesDetailsType;
}

export const LayoutDetails = (props: LayoutDetailsProps): JSX.Element => {
  return (
    <>
      <Cover {...props.data} />
    </>
  );
};
