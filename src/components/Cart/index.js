import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";


const Cart = (name, image, price) => {
  return (
    <>
      <Helmet>
        <style>{`body {
                  overflow-y: hidden; 
                }`}
        </style>
      </Helmet>
    <div className={styles.mainContainer}>
      <div className={styles.emptyContainer}>
      <h4>Your cart is <span>empty :(</span> </h4>
        {/* <div className={styles.productCardContainer}>
            <img src={image} alt={name} />
            <div className={styles.name}> {name} </div>
            <div className={styles.price}> ${price} </div> */}
        <button>
            <NavLink className={styles.button} to="/shop">SHOP</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;