import { styled } from "styled-components";
import { useTelegram } from "../../hooks/useTelegram";

const StyledHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
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

  return (
    <StyledHeader>
      <button onClick={onClose}>Close</button>
      <UserName>{user?.username}</UserName>
    </StyledHeader>
  );
}
