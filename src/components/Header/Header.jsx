import { styled } from "styled-components";
import { useTelegram } from "../../hooks/useTelegram";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderCart from "./HeaderCart/HeaderCart";

const StyledHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  background: var(--tg-theme-secondary-bg-color);
  justify-content: space-between;
  padding: 5px 15px;
`;

const CategoryName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--tg-theme-text-color);
`;

export default function Header() {
  const { onClose } = useTelegram();
  const navigation = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const categoryId = location.pathname.split("/")[1];

  function goBack() {
    navigation(-1);
  }

  return (
    <StyledHeader>
      <button onClick={isMainPage ? onClose : goBack}>
        {isMainPage ? "Close" : "Back"}
      </button>
      <CategoryName>{categoryId}</CategoryName>
      <HeaderCart />
    </StyledHeader>
  );
}
