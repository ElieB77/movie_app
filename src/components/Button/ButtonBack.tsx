import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

export const ButtonBack = () => {
  const router = useRouter();

  const handleClick: () => void = () => {
    router.back();
  };
  return (
    <ButtonBackStyled onClick={handleClick}>
      <Image
        src="/images/arrow-left-solid.svg"
        alt="Arrow Icon"
        width={10}
        height={10}
      />
      Back
    </ButtonBackStyled>
  );
};

const ButtonBackStyled = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    outline: solid 2px ${(props) => props.theme.colors.tertiary};
  }
`;
