
import React from 'react'
import "./Style/Navbar.css"
function Navbar({size, setShow}) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={()=>setShow(true)}>
           Shopping_Cart
        </span>
        <div className="cart" onClick={()=>setShow(false)}>
            <span>
            <i class="fa-solid fa-cart-plus"></i>
            </span>
            <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
