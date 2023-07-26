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

export default function ProductsList() {
  const { categoryId } = useParams();
  const query = useQuery();
  let page = Number(query.get("page"));
  const [data, isLoading, error] = useFetch(
    `https://sport-nutrition-app.onrender.com/products`
  );

  useEffect(() => {
    console.log(error);
  }, [error]);

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
