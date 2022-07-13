import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../redux/cart-context";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    return () => {
    };
  }, [cartCtx.items]);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
          <div className="aem-GridColumn custom--desktop--hide  aem-GridColumn--phone--4 col">
            <div className="headerMenu">
              <input type="checkbox" class="openSidebarMenu"   />
                <label for="openSidebarMenu" class="sidebarIconToggle">
                  <div class="spinner diagonal part-1"></div>
                  <div class="spinner horizontal"></div>
                  <div class="spinner diagonal part-2"></div>
                </label>
            </div>
            
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--4 logo-center">
            <Link to={`/`} className="links"><img className="logo " src="./../../../assets/icons/logo.png" alt="logo" />
            </Link>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--hide">
              <div className="center">
                <a className="links mr-rt-32">Women</a>
                <a className="links mr-rt-32">Men</a>
                <a className="links mr-rt-32">Smart Gear</a>
                <a className="links">Accessories</a>
              </div>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4 text-right">
              <div>
                <a className="links mr-rt-32">
                  <img className="icon" src="./../../../assets/icons/search.svg" alt="search icon"/>
                  <span className="custom--phone--hide">Search</span>
                </a>
                <a className="links mr-rt-32 custom--phone--hide">
                  <img className="icon" src="./../../../assets/icons/user.svg"  alt="profile icon"/>
                  <span >Sign in</span>
                </a>
                <Link to={`/CartDetail`} className="links cart-bg">
                <img className={`cart-icon ${btnIsHighlighted ? "bump" : ""} `} src="./../../../assets/icons/cart.png" alt="cart icon"/>
                {numberOfCartItems}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
