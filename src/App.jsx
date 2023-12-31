import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Provider from "./utils/context";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import ItemPage from "./components/ItemPage/ItemPage";
import Cart from "./components/Cart/Cart";
import HeaderProvider from "./utils/headerTitelContext";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
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
      <HeaderProvider>
        <Container>
          <Header />
          <Routes>
            <Route index element={<CategoryList />} />
            <Route path="/:categoryId" element={<ProductsList />} />
            <Route path="/:categoryId/:itemId" element={<ItemPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </HeaderProvider>
    </Provider>
  );
}

export default App;
