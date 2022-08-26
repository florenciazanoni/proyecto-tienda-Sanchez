import React from 'react'
import './cart.css'

const Cart = ({numeroCarrito})=>{
  return(
      <div style={{background:'pink', color:'black'}}>
          carrito:
          <span>{numeroCarrito}</span>
      </div>
  )
}

export default Cart