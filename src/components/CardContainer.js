import React from "react";
import { bookData } from "../Data";
import Card from "./Card";

const CardContainer = ({ className }) => {
  const [books] = React.useState(bookData);
  return (
    <>
      <div className={className}>
        {books.map((book, index) => (
          <Card book={book} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
