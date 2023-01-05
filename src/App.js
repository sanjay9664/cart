import "./App.css";
import Navbar from "./Component/Navbar";
import Amazon from "./Component/Amazon";
import Cart from "./Component/Cart";
// import "./Component/Style/Amazon.css"
import "./Component/Style/Amazon.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange =(item,d)=>{
   let ind = -1 ;
   cart.forEach((data, index)=>{
    if(data.id===item.id){
      ind = index;
    }
   })
   const tempArr = cart;
   tempArr[ind].amount += d; 
   if(tempArr[ind].amount===0)
    tempArr[ind].amount = 1
    setCart([...tempArr])
  }
  
  return (
    <>
      <Navbar size={cart.length} setShow={setShow}  />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}  />
      )}
      {/* <Amazon handleClick={handleClick} /> */}
      {/* <Cart  cart={cart} setCart = {setCart} /> */}
      {warning && <div className="warning">THIS ITEM IS ADDED YOUR CART </div>}
    </>
  );
}

export default App;


// my name is sanjay git 


// git again push data 