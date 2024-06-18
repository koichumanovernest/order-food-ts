import { useEffect, useState } from "react";
import BasketButton from "./BasketButton";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Props = {
  openModal: () => void;
};

const Header = ({ openModal }: Props) => {
  const [animationClass, setAnimationClass] = useState("");
  const { basket } = useSelector((state: RootState) => state.basket);

  const calculateTotalAmount = () => {
    const sum = basket.reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [setAnimationClass]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        onShowBasket={openModal}
        className={animationClass}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Logo = styled.p`
  font-weight: 600;
  line-height: 57px;
  color: #ffffff;
  font-size: 38px;
  margin: 0;
  margin-left: 5rem;
`;
