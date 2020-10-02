import React , { useState} from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);

    return (
        <div className="header">
        <div className="header__container">
            {/* Header logo */}
            <Link to="/" className="logo__name">
            <img 
             src = "white_logo.png"
             alt = "logo"
             className="header__logo"
             />
            </Link>
            {/* search bar with icon */}
            <div className="header__searchbar">
            <input
            type="text"
            className="search_bar"
            />
            <SearchIcon className="search__icon"/>
            </div>

            {/* 3 links */}
        <div className="header__link_options"> 

             <Link to="/login" className="header__links">
               <div className="header__option">
                  <span className="header__title_one">Hello, sign in</span>
                  <span className="header__title_two">Account & Lists</span>
               </div>
             </Link>

             <Link to="/" className="header__links">
             <div className="header__option">
               <span className="header__title_one">Returns</span>
               <span className="header__title_two">& Orders</span>
             </div>
            </Link>

            {/* add to cart with bag icon */}
            <Link to="/checkout" className="header__cart">
             
             <span><ShoppingBasketIcon/></span>
             <span style={{
               marginLeft : "6px"
             }}>{basket?.length}</span>
            </Link>
            

        </div>
            
        </div>
        <div className="header__bottom">
        <div className="header__bottom_title">
          <span 
          style={{
            marginTop: "6px",
            marginLeft: "10px"            
         }}
          >
          <AddLocationIcon/>
          </span>
          <div className="header__bottom__title__name">
          <span 
          style={{
             fontSize: "12px",             
          }}
          > 
          Deliver to
          </span>
          <span>
          Pakistan
          </span>
          </div>
        </div>
        <div className="header__bottom__links">
          <Link to="/" className="header__bottom__link">
              Todays Deals
          </Link>
          <Link to="/" className="header__bottom__link">
              Customer Service
          </Link>
          <Link to="/" className="header__bottom__link">
              Gift Cards
          </Link>
          <Link to="/" className="header__bottom__link">
              Registry
          </Link>
          <Link to="/" className="header__bottom__link">
              Sell
          </Link>
        
        
        </div>
        
        
        </div>
        </div>

    )
}

export default Header
