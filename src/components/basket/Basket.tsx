import styled from "styled-components";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getBasket } from "../../store/basket/basketThunk";
import { useEffect } from "react";
import { BasketItemType } from "../../utils/types";

type Props = {
  onClose: () => void;
  openModal: boolean;
};

const Basket = ({ onClose, openModal }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { basket } = useSelector((state: RootState) => state.basket);

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const totalAmount = () => {
    const sum = basket.reduce((sum: number, item: BasketItemType) => {
      return (sum + +item.price) * item.amount;
    }, 0);
    return sum.toFixed(2);
  };

  return (
    <Modal onClose={onClose} open={openModal}>
      <MealContainer>
        {basket && basket.length > 0
          ? basket.map((item) => <BasketItem key={item.id} {...item} />)
          : null}
      </MealContainer>
      <TotalAmount totalAmount={totalAmount()} />
      <ButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained">Order</Button>
      </ButtonsContainer>
    </Modal>
  );
};

export default Basket;

const MealContainer = styled("div")`
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;
