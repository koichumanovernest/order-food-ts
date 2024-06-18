import { ButtonProps, styled } from "@mui/material";
import React from "react";

type ButtonStyleProps = {
  variant?: string;
  borderStyle?: string;
};

type Props = ButtonStyleProps &
  ButtonProps & {
    children: React.ReactNode;
  };

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...restProps
}: Props) => {
  return (
    <ButtonStyle variant={variant} borderStyle={borderStyle} {...restProps}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled("button")(
  ({ variant, borderStyle }: ButtonStyleProps) => ({
    background: variant === "contained" ? "#8A2B06" : "#fff",
    borderRadius: borderStyle === "rounded" ? "20px" : "6px",
    fontWeight: 600,
    padding: "10px 32px",
    color: variant === "contained" ? "#fff" : "#8A2B06",
    display: "flex",
    alignItems: "center",
    border: variant === "contained" ? "none" : "1px solid #8A2B06",
    cursor: "pointer",
    "& :hover": {
      color: "#fff",
    },
  })
);
