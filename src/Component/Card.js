import React from "react";
import "./Style/Cards.css"
const Cards = ({ item, handleClick }) => {
    const {title, author, price, img} = item;

  return (
    <div className="cards" key={item.id}>
      <div className="image_box">
        <img src={img} alt="img" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>price-{price}Rs</p>
        <button onClick={()=>handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Cards;
