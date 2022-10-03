import classNames from "class-names";
import React from "react";
import "./button.scss";

const Button = ({ onClick, type, children }) => {
  const btnClass = classNames({
    "btn--main": true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
