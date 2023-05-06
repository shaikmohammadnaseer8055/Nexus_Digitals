import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
const Cart = ({setShowCart}) => {
    return (
        <div className="cart-panel" >
            <div className="opac-layer"></div>
            <div className="cart-content">

                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span 
                    className="close-btn" 
                    onClick={() => setShowCart(false)} >  
                        <MdClose />
                        <span className="text">Close</span>                      
                    </span>
                </div>
                
            </div>
         </div>
    
    );
};

export default Cart;
