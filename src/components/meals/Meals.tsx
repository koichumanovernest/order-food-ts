import styled from "styled-components";
import MealItems from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getMeals } from "../../store/meals/mealsThunk";

const Meals = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { meals } = useSelector((state: RootState) => state.meal);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Card>
      {meals.map((meal, index) => {
        return (
          <MealItems
            key={index}
            id={meal.id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  width: 64rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 80px auto;
  display: flex;
  padding: 40px 40px 36px 40px;
`;
