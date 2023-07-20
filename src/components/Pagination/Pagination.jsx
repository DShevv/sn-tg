import { styled } from "styled-components";
import useQuery from "../../hooks/useQuery";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
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

const PaginationButton = styled(Link)`
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
  const query = useQuery();
  let page = Number(query.get("page"));
  if (!page || page === 0) {
    page = 1;
  }

  return (
    <Container>
      <PaginationButton
        to={`${location.pathname}?page=${1}`}
        className={page === 1 ? "disabled" : ""}
      >
        {" "}
        {"<<"}{" "}
      </PaginationButton>
      <PaginationButton
        to={`${location.pathname}?page=${page - 1}`}
        className={page === 1 ? "disabled" : ""}
      >
        {" "}
        {"<"}{" "}
      </PaginationButton>
      <CurrentPage>{page}</CurrentPage>
      <PaginationButton
        className={page === 10 ? "disabled" : ""}
        to={`${location.pathname}?page=${page + 1}`}
      >
        {">"}
      </PaginationButton>
      <PaginationButton
        to={`${location.pathname}?page=${10}`}
        className={page === 10 ? "disabled" : ""}
      >
        {" "}
        {">>"}{" "}
      </PaginationButton>
    </Container>
  );
}
