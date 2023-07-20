import { styled } from "styled-components";
import ProductItem from "./ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  margin-top: 1px;
  padding: 0 15px;
  min-height: 100vh;
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
  },
  {
    id: 2,
    title: "Item2",
  },
  {
    id: 3,
    title: "Item3",
  },
  {
    id: 4,
    title: "Item4",
  },
  {
    id: 5,
    title: "Item5",
  },
  {
    id: 6,
    title: "Item6",
  },
  {
    id: 7,
    title: "Item7",
  },
  {
    id: 8,
    title: "Item8",
  },
  {
    id: 9,
    title: "Item9",
  },
  {
    id: 10,
    title: "Item10",
  },
  {
    id: 11,
    title: "Item11",
  },
  {
    id: 12,
    title: "Item7",
  },
  {
    id: 13,
    title: "Item8",
  },
  {
    id: 14,
    title: "Item9",
  },
  {
    id: 15,
    title: "Item10",
  },
  {
    id: 16,
    title: "Item11",
  },
];

export default function ProductsList() {
  const { categoryId } = useParams();

  useEffect(() => {
    console.log(categoryId);
  });

  return (
    <Container>
      {data.map((item) => {
        return (
          <ProductItem key={item.id} itemId={item.id}>
            {item.title}
          </ProductItem>
        );
      })}
    </Container>
  );
}
