import { styled } from "styled-components";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import { useTelegram } from "../../hooks/useTelegram";
import { getUserLocate } from "../../utils/currencyFormatter";
import getSymbolFromCurrency from "currency-symbol-map";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--tg-theme-bg-color);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: var(--tg-theme-text-color);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--tg-theme-text-color);
`;

const Mass = styled.div`
  font-size: 16px;
  color: var(--tg-theme-hint-color);
`;

const AddButton = styled(Button)`
  position: absolute;
  min-width: ${(props) => (props.isFull ? "100%" : "110px")};
  right: 0;
  transition: all 0.5s ease;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2.5px;
`;

const Count = styled.div`
  width: 110px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--tg-theme-text-color);
`;

/* const testData = {
  id: 1,
  title: "WL Magnesium Chelated 200mg",
  price: 10.59,
  mass: 100,
};
 */
export default function ItemPage() {
  const { itemId } = useParams();
  const { addItem, removeItem, isInCart, getCount } = useContext(Context);
  const [data, isLoading, error] = useFetch(
    `https://sport-nutrition-app.onrender.com/products`
  );
  const { user } = useTelegram();

  function addHandler() {
    addItem(data[itemId]);
  }

  function removeHandler() {
    removeItem(data[itemId].id);
  }

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>{data[itemId].name}</Title>
          <Info>
            <Mass>{data[itemId].description} </Mass>
            <Price>
              {getSymbolFromCurrency(data[itemId].currency)}{" "}
              {data[itemId].price.toLocaleString(
                getUserLocate(user.language_code),
                {
                  style: "currency",
                  currency: data[itemId].currency,
                }
              )}
            </Price>
          </Info>
          <ButtonContainer>
            <Button type="remove" onClick={removeHandler}>
              Remove
            </Button>
            <Count>{getCount(data[itemId].id)}</Count>
            <AddButton
              type="add"
              onClick={addHandler}
              isFull={!isInCart(data[itemId].id)}
            >
              Add
            </AddButton>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
