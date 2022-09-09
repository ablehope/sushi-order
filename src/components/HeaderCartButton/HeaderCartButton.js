import styles from './HeaderCartButton.module.css';
import CartIcon from "../../assets/004 CartIcon";

const HeaderCartButton = () => {
    return <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>2</span>
    </button>
}
export default HeaderCartButton;