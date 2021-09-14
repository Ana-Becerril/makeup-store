import React from 'react';
import styles from './style.module.css';



const Shop = () => {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h1>CATEGORIES</h1>
          <ul>
            <li>Lashes</li>
            <li>Eyes</li>
            <li>Lips</li>
          </ul>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    );
  };
  
  export default Shop;