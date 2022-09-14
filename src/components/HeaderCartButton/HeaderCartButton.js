import styles from './HeaderCartButton.module.css';
import CartIcon from "../../assets/004 CartIcon";
import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [ isButtonAnimated, setIsButtonanimated ] = useState(false)
    const cartContext = useContext(CartContext);

    const cartItemsNumber = cartContext.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`

    useEffect(() => {
        if(cartContext.items.length === 0) {
            return;
        }
        setIsButtonanimated(true)
        const timer = setTimeout(() => {
            setIsButtonanimated(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        };
    }, [cartContext.items])

    return <button className={buttonClasses} onClick={props.onShowCart}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
}

export default HeaderCartButton;
