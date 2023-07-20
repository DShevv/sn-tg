import { styled } from "styled-components";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context";

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
  justify-content: space-between;
`;

const testData = {
  id: 1,
  title: "WL Magnesium Chelated 200mg",
  price: 10.59,
  mass: 100,
};

export default function ItemPage() {
  const { itemId } = useParams();
  const { addItem, removeItem, isInCart, getCount } = useContext(Context);

  function addHandler() {
    addItem(testData);
  }

  function removeHandler() {
    removeItem(testData.id);
  }

  return (
    <Container>
      <Title>{testData.title}</Title>
      <Info>
        <Mass>{testData.mass} pills</Mass>
        <Price>BYN {testData.price}</Price>
      </Info>
      <ButtonContainer>
        <Button type="remove" onClick={removeHandler}>
          Remove
        </Button>
        <AddButton
          type="add"
          onClick={addHandler}
          isFull={!isInCart(testData.id)}
        >
          Add
        </AddButton>
      </ButtonContainer>
    </Container>
  );
}
