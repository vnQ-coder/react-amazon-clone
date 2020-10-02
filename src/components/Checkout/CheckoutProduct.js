import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../../StateProvider';


function CheckoutProduct({ id , image , price , rating , title}) {
    const [{basket} , dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket on click
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        })
    }
    return (
        
        <div className="checkout__product">
            <img
            src={image}
            alt="image"
            className="checkout__product__image"
            />
            <div className="checkout__product__info">
            <div className="checkout__product__title">
            {title}
            </div>
            <div className="checkout__product__price">
            ${price}
            </div>
            <div className="checkout__product__rating">
            <Rating value={rating}/>
            </div>
            <button 
            className="product__btn"
            onClick = {removeFromBasket}
            >
            Remove Item
            </button>
            </div>
        </div>
        
    )
}

export default CheckoutProduct
