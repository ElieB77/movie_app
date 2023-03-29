import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface PaginationProps {
  total_pages: number;
  limit: number;
}

export const Pagination = (props: PaginationProps): JSX.Element => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.min(
    Math.ceil(props.total_pages),
    props.limit
  );

  const visibleRange: number[] = [
    Math.max(currentPage - 2, 0),
    Math.min(currentPage + 3, totalPages),
  ];

  const [pageCountList, setPageCountList] = useState<number[]>(
    [...Array(totalPages)]
      .map((_, index: number) => index + 1)
      .slice(...visibleRange)
  );

  useEffect(() => {
    const queryPage: number = Number(router.query.page);
    if (queryPage && queryPage !== currentPage) {
      setCurrentPage(queryPage);
    }
  }, [currentPage, router.query.page]);

  const handlePageClick: (arg: number) => void = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    const newRange: number[] = [
      Math.max(pageNumber - 2, 0),
      Math.min(pageNumber + 2, totalPages),
    ];

    setPageCountList(
      [...Array(totalPages)]
        .map((_, index: number) => index + 1)
        .slice(...newRange)
    );

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: pageNumber,
      },
    });
  };

  return (
    <>
      {props.total_pages > 1 && (
        <PaginationContainer>
          {currentPage >= 3 && (
            <>
              <button onClick={() => handlePageClick(1)}>1</button>
              <span>...</span>
            </>
          )}
          {pageCountList.map((pageNumber: number) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}
          {currentPage !== totalPages && (
            <>
              <span>...</span>
              <button onClick={() => handlePageClick(totalPages)}>
                {totalPages}
              </button>
            </>
          )}
        </PaginationContainer>
      )}
    </>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0 30px 0;

  & button {
    background-color: ${(props) => props.theme.colors.primary_dark};
    color: ${(props) => props.theme.colors.primary_light};
    border-color: ${(props) => props.theme.colors.primary_light};
    padding: 5px 10px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.tertiary};
    }
  }

  & span {
    margin-left: -10px;
    padding: 0 5px;
  }

  & .active {
    background-color: ${(props) => props.theme.colors.tertiary};
    pointer-events: none;
  }
`;
