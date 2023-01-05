import React from "react";
import list from "../Data";
import "./Style/Amazon.css";
import Cards from "./Card";
const Amazon = ({handleClick}) => {
  return (
    <section>
      {list.map((item) => {
        return(
          <Cards item={item} key={item.id} handleClick={handleClick} />
        )
        
      })}
    </section>
  );
};

export default Amazon;
