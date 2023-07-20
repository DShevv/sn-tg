import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  color: var(--tg-theme-text-color);
  background-color: var(--tg-theme-bg-color);
`;

export default function CategoryItem({ category, children }) {
  return <Container to={`/${category}`}>{children}</Container>;
}
