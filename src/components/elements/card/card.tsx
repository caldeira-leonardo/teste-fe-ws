import React from "react";

type CardProps = {
  card: string;
};

const Card = ({ card }: CardProps) => {
  return <div>Card: {card}</div>
};

export default Card;
