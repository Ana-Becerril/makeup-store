import React, {useState} from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Counter from '../Counter';
import CartModal from '../CartModal';

const NavBar = () => {
const [cart, setCart] = useState(false);

const showCart = () => setCart(true);
const removeCart = () => setCart(false)

    return (

        <div className={styles.navContainer} >
            <div className={styles.bar}>
                <div className={`${styles.home} ${styles.coolLink}`}>
                    <NavLink exact to="/">HOME</NavLink>
                </div>
                <div className={`${styles.shop} ${styles.coolLink}`}>
                    <NavLink to="/shop">SHOP</NavLink>
                </div>
                <div className={`${styles.contact} ${styles.coolLink}`}>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
                </div>
                <div className={styles.cartContainer}>
                    <Counter/>
                        <FontAwesomeIcon onClick={showCart} icon={faShoppingBag} className={styles.cartIcon}/>
                        {cart ? 
                        <CartModal
                        removeCart={removeCart}
                        /> : null}
                </div>
        </div>
    );
}

export default NavBar;