import { styled } from "styled-components";
import { useTelegram } from "../../hooks/useTelegram";
import { useLocation, useNavigate } from "react-router-dom";

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

const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--tg-theme-text-color);
`;

export default function Header() {
  const { user, onClose } = useTelegram();
  const navigation = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  function goBack() {
    navigation(-1);
  }

  return (
    <StyledHeader>
      <button onClick={isMainPage ? onClose : goBack}>
        {isMainPage ? "Close" : "Back"}
      </button>
      <UserName>{user?.username}</UserName>
    </StyledHeader>
  );
}
