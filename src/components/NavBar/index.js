import React, { useState } from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Counter from '../Counter';
import CartModal from '../CartModal';

const NavBar = () => {
    const [cart, setCart] = useState(false);
    const showCart = () => setCart(true);
    const removeCart = () => setCart(false);

    return (

        //         <div className={styles.navContainer} >
        //             <div className={styles.bar}>
        //                 <div className={styles.menu}>
        //                     <div className={`${styles.home} ${styles.coolLink}`}>
        //                         <NavLink exact to="/">HOME </NavLink>
        //                     </div>
        //                     <div className={`${styles.shop} ${styles.coolLink}`}>
        //                         <NavLink to="/shop">SHOP </NavLink>
        //                     </div>
        //                     <div className={`${styles.contact} ${styles.coolLink}`}>
        //                         <NavLink to="/contact">CONTACT </NavLink>
        //                     </div>
        //                 </div>
        //                 <div className={styles.hamburger}>
        //                     <FontAwesomeIcon icon={faBars} className={styles.barsIcon} />
        //                 </div>
        //             </div>
        //             <div className={styles.cartContainer}>
        //                 <Counter />
        //                 <FontAwesomeIcon onClick={showCart} icon={faShoppingBag} className={styles.cartIcon} />
        //                 {cart ?
        //                     <CartModal
        //                         removeCart={removeCart}
        //                     /> : null}
        //             </div>
        //         </div>
        //     );
        // }


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