import React from 'react'
import { useStateValue } from '../../StateProvider';
import CurrencyFormat from 'react-currency-format';
import {getBaskettotal} from '../../reducer'
import CardDetailed from './CardDetailed';

function Subtotal() {

    const [{ basket}] = useStateValue();
    
    return (
        <div className="subtotal">
            {/* price */}
            <div className="subtotal__title"> Subtotal ({basket.length} items) </div>
            
            <div className="subtotal__price">
                <div> Items Price : ${getBaskettotal(basket)} </div>
                <div>
                { 
                    (basket.length === 0) ? 'Tax        : $0' : 'Tax        : $200 '
                }  
                
                </div>
            </div>
            <div className="subtotal__total__price">
                 Total Price      : ${ getBaskettotal(basket) + 200} 
            </div>
             

            <button 
            className="product__btn"
            >
            Proceed to Checkout
            </button>
            
        </div>
    )
}

export default Subtotal
