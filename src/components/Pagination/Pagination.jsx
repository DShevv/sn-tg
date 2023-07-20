import { styled } from "styled-components";
import useQuery from "../../hooks/useQuery";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 15px;
  gap: 5px;
`;

const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: var(--tg-theme-button-text-color);
  background-color: var(--tg-theme-button-color);
`;

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-weight: 600;
  color: var(--tg-theme-text-color);
  cursor: pointer;
  text-decoration: none;

  &.disabled {
    filter: opacity(70%);
    pointer-events: none;
  }
`;

export default function Pagination() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const [page, setPage] = useState(1);

  useEffect(() => {
    let newPage = Number(query.get("page"));
    if (!newPage || newPage === 0) {
      newPage = 1;
    }
    setPage(newPage);
  }, [query]);

  function handleClick(newPage) {
    navigate(`${location.pathname}?page=${newPage}`);
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <PaginationButton
        onClick={() => {
          handleClick(1);
        }}
        className={page === 1 ? "disabled" : ""}
      >
        {" "}
        {"<<"}{" "}
      </PaginationButton>
      <PaginationButton
        onClick={() => {
          handleClick(page - 1);
        }}
        className={page === 1 ? "disabled" : ""}
      >
        {" "}
        {"<"}{" "}
      </PaginationButton>
      <CurrentPage>{page}</CurrentPage>
      <PaginationButton
        className={page === 10 ? "disabled" : ""}
        onClick={() => {
          handleClick(page + 1);
        }}
      >
        {">"}
      </PaginationButton>
      <PaginationButton
        onClick={() => {
          handleClick(10);
        }}
        className={page === 10 ? "disabled" : ""}
      >
        {" "}
        {">>"}{" "}
      </PaginationButton>
    </Container>
  );
}
