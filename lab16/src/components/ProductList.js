import React from "react";
import '../App.css'
import apple from '../images/apple.png'
import grapes from '../images/grapes.png'
import orange from '../images/orange.png'

const products = [
    {id: 1, name: "Apple", price: 1.50, was: 2, image: apple},
    {id: 2, name: "Grapes", price: 1.85, was: 2.1, image: grapes},
    {id: 3, name: "Orange", price: 1.23, was: 1.90, image: orange}
]

const ProductList = ({addToCart}) =>{
    return(
        <div>
            <h2 className="producttitle">Products</h2>
            <section className="cardcontainer">
                {
                    products.map((product)=>(
                        <div className="card" key={product.id}>
                            <img src={product.image}/>
                            <p className="productname">
                                {product.name} <br/>
                                <s> ${product.was}/lb</s>
                                <span>${product.price}/lb </span>
                            </p>
                            <button className="btn_addcart" onClick={()=>addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}
export default ProductList