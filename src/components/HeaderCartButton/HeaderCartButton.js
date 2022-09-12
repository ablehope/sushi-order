import styles from './HeaderCartButton.module.css';
import CartIcon from "../../assets/004 CartIcon";
import React, { useContext } from 'react';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);

    const cartItemsNumber = cartContext.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return <button className={styles.button} onClick={props.onShowCart}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
}

export default HeaderCartButton;
