import { styled } from "styled-components";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import CategoryItem from "./CategoryItem/CategoryItem";
import Pagination from "../Pagination/Pagination";
import useQuery from "../../hooks/useQuery";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1px;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1px;
  background-color: var(--tg-theme-secondary-bg-color);
`;

/* const data = [
  {
    id: 1,
    title: "Title 1",
  },
  {
    id: 2,
    title: "Title 2",
  },
  {
    id: 3,
    title: "Title 3",
  },
  {
    id: 4,
    title: "Title 4",
  },
  {
    id: 5,
    title: "Title 5",
  },
  {
    id: 6,
    title: "Title 6",
  },
  {
    id: 7,
    title: "Title 7",
  },
  {
    id: 8,
    title: "Title 8",
  },
  {
    id: 9,
    title: "Title 9",
  },
  {
    id: 10,
    title: "Title 10",
  },
  {
    id: 11,
    title: "Title 11",
  },
  {
    id: 12,
    title: "Title 7",
  },
  {
    id: 13,
    title: "Title 8",
  },
  {
    id: 14,
    title: "Title 9",
  },
  {
    id: 15,
    title: "Title 10",
  },
  {
    id: 16,
    title: "Title 11",
  },
]; */

export default function CategoryList() {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const query = useQuery();
  let page = Number(query.get("page"));
  const [data, isLoading, error] = useFetch(
    `https://sport-nutrition-app.onrender.com/categories`
  );

  useEffect(() => {
    console.log(page);
  }, [page]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const toCart = useCallback(() => {
    navigate("/cart");
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "View order",
    });

    tg.onEvent("mainButtonClicked", toCart);

    return () => {
      tg.offEvent("mainButtonClicked", toCart);
    };
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item) => {
          return (
            <CategoryItem key={item.id} category={item.id}>
              {item.name}
            </CategoryItem>
          );
        })
      )}
      <Pagination />
    </Container>
  );
}
