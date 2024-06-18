import { Button, ButtonProps, styled } from "@mui/material";

type Props = ButtonProps & {
  count: number;
  onShowBasket: () => void;
};

const BasketButton = ({ count, onShowBasket, ...restProps }: Props) => {
  return (
    <ButtonStyle onClick={onShowBasket} {...restProps}>
      <Text>Your Cart</Text>
      <Amount id="counter">{count || 0}</Amount>
    </ButtonStyle>
  );
};

export default BasketButton;

const ButtonStyle = styled(Button)(() => ({
  background: "#5a1f08",
  borderRadius: " 30px",
  padding: "12px 32px",
  fontWeight: " 600",
  fontSize: " 16px",
  lineHeight: " 24px",
  border: " none",
  display: " flex",
  alignItems: " center",
  gap: " 12px",
  marginRight: " 4rem",
}));
const Text = styled("span")(() => ({
  fontStyle: " normal",
  fontWeight: " 600",
  fontSize: " 16px",
  lineHeight: " 24px",
  color: "#ffffff",
}));

const Amount = styled("span")(() => ({
  margin: " 0",
  background: "#8a2b06",
  borderRadius: " 30px",
  padding: "4px 20px",
  fontStyle: " normal",
  fontWeight: " 700",
  fontSize: " 20px",
  lineHeight: " 27px",
  color: "#ffffff",
}));
