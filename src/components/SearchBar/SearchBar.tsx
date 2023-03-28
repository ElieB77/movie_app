import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      router.push(`?query=${searchValue}&page=${router.query.page}`);
    }
  };

  return (
    <Container>
      <Image
        src={"/images/icon-search.svg"}
        width={32}
        height={32}
        alt={"Logo Search"}
      />
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 34px;

  & input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.primary_light};
    outline: none;
    padding-right: 200px;

    &:focus {
    }
  }
`;
