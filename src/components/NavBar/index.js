import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  // const history = useHistory();

  // const goTo = (path) => {
  //   if (path === "shop" ) {
  //     history.push("/shop")
  //   }
  // }

  return (

    <div className={styles.navContainer} >
        <div className={styles.bar}>
            <div className={`${styles.home} ${styles.coolLink}`}>
            <NavLink exact to="/">Home</NavLink>
            </div>
            <div className= {`${styles.shop} ${styles.coolLink}`}>
            <NavLink to="/shop">Shop</NavLink>
            </div>
            <div className= {`${styles.contact} ${styles.coolLink}`}>
            <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className= {`${styles.cart} ${styles.coolLink}`}>
            <NavLink to="/cart">Cart</NavLink>
            </div>
        </div>
    </div>
);
} 

export default NavBar;