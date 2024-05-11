import React from "react";

interface ButtonProps {
  variant?: "big" | "small";
  onClick?: () => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "big",
  onClick,
}) => {
  const buttonSize = variant === "big" ? "p-2 px-6" : "px-3";
  return (
    <button
      className={`bg-green-500 rounded-lg text-white ${buttonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
