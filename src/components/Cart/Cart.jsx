import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { Context } from "../../utils/context";
import { useTelegram } from "../../hooks/useTelegram";

const Container = styled.div`
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 20px;
`;

const ItemTitle = styled.div`
  font-size: 14px;
  color: var(--tg-theme-text-color);
`;

const ItemValue = styled.div`
  font-size: 14px;
  color: var(--tg-theme-text-color);
`;

const ItemCount = styled.div`
  font-size: 14px;
  color: #c0a448;
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
              <div>
                <ItemTitle>{elem.title}</ItemTitle>
                <ItemCount>{elem.count}</ItemCount>
              </div>
              <ItemValue>{elem.price}</ItemValue>
            </Item>
          );
        })}
      </div>
    </Container>
  );
}
