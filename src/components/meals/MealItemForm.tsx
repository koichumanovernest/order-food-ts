/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { MealItem } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addToBasket, increaseBasket } from "../../store/basket/basketThunk";

type Props = Omit<MealItem, "description">;

const MealItemForm = ({ id, title, price }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { basket } = useSelector((state: RootState) => state.basket);

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const basketData = basket.find((item) => item.title === title);

    if (basketData) {
      const updatedAmount = basketData.amount + amount;

      dispatch(
        increaseBasket({
          basketId: basketData.id,
          title,
          price,
          updatedAmount,
        })
      );
    } else {
      dispatch(addToBasket({ title, price, amount, id }));
    }
  };

  return (
    <AddAmount onSubmit={submitHandler}>
      <div>
        <AmountLabel>Amount</AmountLabel>
        <AmountsInput
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          min={"1"}
          max={"5"}
          defaultValue={1}
        />
      </div>

      <Button>+ ADD</Button>
    </AddAmount>
  );
};

export default MealItemForm;

const AddAmount = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AmountLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
const AmountsInput = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6d6 !important;
  outline: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 12px;
`;
