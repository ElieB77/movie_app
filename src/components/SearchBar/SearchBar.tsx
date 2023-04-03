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
    setSearchValue(e.target.value);
  };

  const handleSubmit: () => void = () => {
    if (Boolean(searchValue)) {
      router.push({
        query: {
          query: searchValue.toLowerCase(),
          page: router.query.page || 1,
        },
      });
    } else {
      router.replace("/", undefined, { shallow: true });
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
        value={searchValue}
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
        onKeyDown={handleSubmit}
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
    width: 30%;
    position: relative;

    &:focus {
      border-bottom: solid 2px;
    }
  }
`;
