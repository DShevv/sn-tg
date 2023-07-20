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
  fontweight: bold;
  color: var(--tg-theme-text-color);
`;

const BackButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
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
      <BackButton onClick={isMainPage ? onClose : goBack}>
        {isMainPage ? (
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L5 19M5.00001 5L19 19"
              stroke="var(--tg-theme-text-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H4M4 12L10 6M4 12L10 18"
              stroke="var(--tg-theme-text-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </BackButton>

      <CategoryName>{categoryId}</CategoryName>
      <HeaderCart />
    </StyledHeader>
  );
}
