import styles from './MealItem.module.css';
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = (props) => {

    const formatedPrice = `${props.price.toFixed(2)}$`

    return <li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{formatedPrice}</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
}

export default MealItem;