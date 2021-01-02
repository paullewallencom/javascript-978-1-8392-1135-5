import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => (
  <ul>{cards.map((card, index) => <Card key={index} {...card} />)}</ul>
);

export default CardList;
