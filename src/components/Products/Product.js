import React from 'react';
import './Product.css';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../../StateProvider';

function Product({id , title , price , rating , image}) {
    const [{ basket} , dispatch] = useStateValue();
    const addToBasket = () => {
     // add item to basket
     dispatch({
         type: 'ADD_TO_BASKET',
         item : {
             id : id,
             title : title,
             image : image,
             price : price ,
             rating : rating
         }
     })

    }
    return (
        <div className="product__container">
            <div className="product__title">
            <p>{title}</p>
            </div>
            <div className="product__price">
            <small>$</small>
            <strong>{price}</strong>
            </div>
            <div className="product__rating">
            <Rating value={rating}/>
            </div>
            
            <img
            src={image}
            alt="product_name"
            className="product__image"
            />
            
            <button 
            onClick = {addToBasket}
            className="product__btn">
            Add to Basket
            </button>

        </div>

    )
}

export default Product
