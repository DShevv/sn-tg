import { styled } from "styled-components";
import { Link } from "react-router-dom";
import getCurrencySymbol from "../../../utils/getCurrencySymbol";
import { useTelegram } from "../../../hooks/useTelegram";

const Container = styled(Link)`
  width: 100%;
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  cursor: pointer;
  color: var(--tg-theme-text-color);
  background-color: var(--tg-theme-bg-color);
`;

const Title = styled.div`
  flex: 1 0 70%;
`;

const Info = styled.div`
  display: flex;
  flex: 1 0 20%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--tg-theme-text-color);
`;

const Mass = styled.div`
  font-size: 12px;
  color: var(--tg-theme-hint-color);
`;

export default function ProductItem({ item, children }) {
  const { user } = useTelegram();

  return (
    <Container to={`${item.id}`}>
      <Title>{children}</Title>
      <Info>
        <Price>
          {getCurrencySymbol(
            `${user.language_code}-${user.language_code.toUpperCase()}`,
            item.currency
          )}{" "}
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: item.currency,
          })}
        </Price>
        <Mass>80 pills</Mass>
      </Info>
    </Container>
  );
}
