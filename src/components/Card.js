import React from "react";
import Button from "./Button";

const Card = ({ book }) => {
  const { image, title, author } = book;
  return (
    <div className="w-4/5 m-auto mt-5 lg:w-3/10 border border-solid border-blue-500 p-5 border-opacity-30 hover:border-opacity-100">
      <img className="w-24 h-28 d-block m-auto" src={image} alt={title} />
      <h1 className="pt-3">{title}</h1>
      <p className=" font-thin">{author}</p>
      <Button
        className="bg-primary hover:bg-secondary w-full h-10 text-white mt-8"
        innerText="Purchase"
      />
    </div>
  );
};

export default Card;
