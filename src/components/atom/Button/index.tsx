"use client";

import {
  CircularProgress,
  Button as MuiButton,
  ButtonProps,
} from "@mui/material";
import React from "react";

type IButtonType = "button" | "submit";

interface IButtonProps extends ButtonProps {
  onClick?: () => void;
  className?: string;
  type?: IButtonType;
  title?: string;
  isLoading?: boolean;
  disable?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    onClick,
    variant = "primary",
    className,
    type = "submit",
    title = "",
    isLoading = false,
    disable = false,
  } = props;

  return (
    <>
      <MuiButton
        {...props}
        fullWidth
        onClick={onClick}
        sx={{ ...props.sx, height: 44, borderRadius: "8px" }}
      >
        {props.children}
      </MuiButton>
    </>
  );
};

export default Button;
