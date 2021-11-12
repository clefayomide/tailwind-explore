import React from "react";

const Button = ({ className, innerText }) => {
  return (
    <>
      <button className={className}>{innerText}</button>
    </>
  );
};

export default Button;
