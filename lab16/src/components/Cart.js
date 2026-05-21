import React from "react";
import '../App.css'

const Cart = ({cart, removeFromCart})=>{
    return(
        <div>
            <h2 className="carttitle">Your Cart</h2>
            <section className="cartcontainer">
                {cart.length === 0 && <p className="emptymsg">Cart is empty</p>}
                {cart.map((item)=>(
                    <div key={item.id} className="itemcart">
                        <img className="cartitemimg" src={item.image}/>
                        <p className="cartitemname">{item.name}</p>
                        <p className="cartitemprice">{item.price}</p>
                        <p className="cartitemquantity">Quantity = {item.qty}</p>
                        <p className="caritemtotal">Total = {item.price*item.qty}</p>
                        <button className="btncartremove" onClick={()=>removeFromCart(item.id)}>X Remove</button>
                    </div>
                ))}

                <p className="totalcart">Total $
                    {cart.reduce((total,item)=> total+(item.price * item.qty), 0)}
                    {/* 0 is the initial value for the total in the reduce method */}
                </p>
            </section>
        </div>
    )
}

export default Cart