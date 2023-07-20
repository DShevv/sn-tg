import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Provider from "./utils/context";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductsList from "./components/ProductsList/ProductsList";

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Provider>
      <Container>
        <Routes>
          <Route index element={<CategoryList />} />
          <Route path="/:categoryId" element={<ProductsList />} />
          <Route path="/:categoryId/:itemId" element={<div>item</div>} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
