import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

import "./Header.scss";

const Header = () => {
const [scrolled, setScrolled] = useState(false);
const [showCart, setShowCart] = useState(false);
const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200) {
        setScrolled(true);
    } else{
        setScrolled(false);
    }
};    

useEffect(() => {
    window.addEventListener("scroll", handleScroll)
}, []);

    return (
        
    <>

    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">Nexus Digitals</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon" onClick={()=> setShowCart(true)}>
                    <CgShoppingCart />
                    <span>5</span>
                </span>
            </div>
        </div>
    </header>

    {showCart && <Cart setShowCart={setShowCart} />}

    </> //<> and </> are "empty fragments" used to remove error when added a component outside of the parent element in this case cart is out of header which is a parent element so to avoid this syntax error we have used the empty fragment

    );
};

export default Header;
