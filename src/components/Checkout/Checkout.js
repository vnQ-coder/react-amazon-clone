import React from 'react'
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket}] = useStateValue();
    return (
        <div className="checkout__container">
        <div className="banner__subtotal">
            <img
            src="checkout_banner.jpg"
            alt="Checkout"
            className="checkout__banner" 
            />
            
        </div>    
            <div className="product__info">
            <div className="product"> 
            { basket?.length === 0 ? (
                <div>
                  <h2>Your Shopping basket is empty</h2>
                  <p>
                  You have no items in your Basket. To buy one or click on "Add to Basket" next to the item.
                  </p> 
                </div>
            ): (

                <div style = {{
                    fontSize : "27px",
                    fontWeight : "600",
                    paddingBottom: "10px",
                }}>
                  Your Shopping Basket
                </div>

            )}
            {
                basket?.map( item => (
                    <CheckoutProduct
                    id = {item.id}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    title = { item.title}
                    />

                ))
            }
            </div>
            <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
