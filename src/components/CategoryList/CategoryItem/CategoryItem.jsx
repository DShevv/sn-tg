import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../../../utils/headerTitelContext";

const Container = styled(Link)`
  width: 100%;
  height: 50px;
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: var(--tg-theme-text-color);
  background-color: var(--tg-theme-bg-color);
`;

export default function CategoryItem({ category, children }) {
  const { changeTitle } = useContext(HeaderContext);

  return (
    <Container
      to={`/${category.id}`}
      onClick={() => {
        changeTitle(category.name);
      }}
    >
      {children}
    </Container>
  );
}
