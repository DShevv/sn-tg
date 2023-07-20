import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { Context } from "../../utils/context";
import { useTelegram } from "../../hooks/useTelegram";

const Container = styled.div`
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  color: var(--tg-theme-text-color);
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;

  color: var(--tg-theme-text-color);
`;

const ItemValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--tg-theme-text-color);
`;

const ItemCount = styled.div`
  font-size: 16px;
  color: var(--tg-theme-button-color);
`;

export default function Cart() {
  const { cartItems, getCartPrice } = useContext(Context);
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: `PAY $${getCartPrice()}`,
      color: "#48c058",
    });

    tg.MainButton.show();

    return () => {
      tg.MainButton.hide();
    };
    /* tg.onEvent("mainButtonClicked", toCart);

     return () => {
       tg.offEvent("mainButtonClicked", toCart);
     }; */
  }, []);

  return (
    <Container>
      <div>
        {cartItems.map((elem) => {
          return (
            <Item key={elem.id}>
              <ItemTitle>{elem.title}</ItemTitle>

              <ValueContainer>
                <ItemValue>{elem.price}</ItemValue> *
                <ItemCount>{elem.count}</ItemCount>
              </ValueContainer>
            </Item>
          );
        })}
      </div>
    </Container>
  );
}
