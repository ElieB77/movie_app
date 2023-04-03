import Image from "next/image";
import styled from "styled-components";
import { useBookmark } from "@/contexts";
import { CardType } from "@/types/card";

interface BookmarkProps extends CardType {
  isBookmarked: boolean;
}

export const Bookmark = (props: BookmarkProps): JSX.Element => {
  const { storeMovieToLS } = useBookmark();
  return (
    <ButtonStyled onClick={() => storeMovieToLS({ ...props })}>
      <Image
        src="/images/icon-bookmark-empty.svg"
        width={12}
        height={14}
        alt="Bookmark Icon"
      />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: none;

  &:hover {
    outline: solid 2px ${(props) => props.theme.colors.primary_light};
  }
`;
