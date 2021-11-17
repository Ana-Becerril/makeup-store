import React, { useState } from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Counter from '../Counter';
import CartModal from '../CartModal';

const NavBar = () => {
    const [cart, setCart] = useState(false);
    const showCart = () => setCart(true);
    const removeCart = () => setCart(false);

    return (
        <div className={styles.navContainer}>
            <input type="checkbox" className={styles.toggler} />
            <div className={styles.hamburger}><div></div></div>
            <div className={styles.menu}>
                <div>
                    <div>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><NavLink exact to="/">HOME </NavLink></li>
                            <li className={styles.menuItem}><NavLink to="/shop">SHOP </NavLink></li>
                            <li className={styles.menuItem}><NavLink to="/contact">CONTACT </NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.cartContainer}>
                <Counter />
                <FontAwesomeIcon onClick={showCart} icon={faShoppingBag} className={styles.cartIcon} />
                {cart ?
                    <CartModal
                        removeCart={removeCart}
                    /> : null}
            </div>
        </div>
    );
}

export default NavBar;