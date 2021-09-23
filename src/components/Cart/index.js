import styles from './style.module.css';
import { NavLink } from 'react-router-dom';


const Cart = () => {
  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.emptyContainer}>
      <h4>Your cart is <span>empty :(</span> </h4>
        <button>
            <NavLink className={styles.button} to="/shop">SHOP</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;