import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext.jsx";
import {Link} from "react-router-dom";
import "./product.css";
import { useAuth } from '../../context/authContext.jsx';

const Product = (props) => {
    const { isLoggedIn, login, logout } = useAuth();
    const productData = props.data;
    const { addToCart , cartItems } = useContext(CartContext)
    return (
        <div className="product">
            <Link key={productData._id} to={`/products/${productData._id}`}>
                <img src={productData.imageUrl} alt={productData.name}/>
                <div className="product-info">
                    <p className="product-name">{productData.name}</p>
                    <p>{productData.price} zł</p>
                </div>
            </Link>
                {isLoggedIn &&
                    (<button className="addToCartBttn" onClick={() => addToCart(productData._id)}>
                        Dodaj do koszyka! { cartItems && cartItems.find((item) => item._id === productData._id) ? cartItems.find((item) => item._id === productData._id).quantity : ""}
                    </button>)
                }
        </div>
    )
};

export default Product;
