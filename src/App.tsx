import { useState } from "react";
import Header from "./components/header/Header";
import styled from "styled-components";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModalHandler = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <h1>
      <Header openModal={toggleModalHandler} />

      <Content>
        <Summary />
        <Meals />
      </Content>

      <Basket onClose={toggleModalHandler} openModal={openModal} />
    </h1>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
