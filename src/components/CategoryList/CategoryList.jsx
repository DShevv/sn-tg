import { styled } from "styled-components";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import CategoryItem from "./CategoryItem/CategoryItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const data = [
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
];

export default function CategoryList() {
  const { tg } = useTelegram();
  const navigate = useNavigate();

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
      {data.map((item) => {
        return (
          <CategoryItem key={item.id} category={item.id}>
            {item.title}
          </CategoryItem>
        );
      })}
    </Container>
  );
}
