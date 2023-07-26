import { styled } from "styled-components";
import ProductItem from "./ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const Container = styled.div`
  width: 100%;
  margin-top: 1px;
  position: relative;
  padding-bottom: 50px;
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1px;
  background-color: var(--tg-theme-secondary-bg-color);
`;

const data = [
  {
    id: 1,
    title:
      "Item1Item1Item1Item1 Item1Item1Item1Item1 Item1Item1Item1Item1Item1",
    price: 10.29,
  },
  {
    id: 2,
    price: 10.39,

    title: "Item2",
  },
  {
    id: 3,
    price: 10.99,
    title: "Item3",
  },
  {
    id: 4,
    price: 10.99,
    title: "Item4",
  },
  {
    id: 5,
    price: 10.99,
    title: "Item5",
  },
  {
    id: 6,
    price: 10.99,
    title: "Item6",
  },
  {
    id: 7,
    price: 10.99,
    title: "Item7",
  },
  {
    id: 8,
    price: 10.99,
    title: "Item8",
  },
  {
    id: 9,
    price: 10.99,
    title: "Item9",
  },
  {
    id: 10,
    price: 10.99,
    title: "Item10",
  },
  {
    id: 11,
    price: 10.99,
    title: "Item11",
  },
  {
    id: 12,
    price: 10.99,
    title: "Item7",
  },
  {
    id: 13,
    price: 10.99,
    title: "Item8",
  },
  {
    id: 14,
    price: 10.99,
    title: "Item9",
  },
  {
    id: 15,
    price: 10.99,
    title: "Item10",
  },
  {
    id: 16,
    price: 10.99,
    title: "Item11",
  },
];

export default function ProductsList() {
  const { categoryId } = useParams();
  const query = useQuery();
  let page = Number(query.get("page"));
  const [data, isLoading, error] = useFetch(
    `http://79.137.203.212:8099/products`
  );

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item) => {
          return (
            <ProductItem key={item.id} item={item}>
              {item.name}
            </ProductItem>
          );
        })
      )}
      <Pagination />
    </Container>
  );
}
