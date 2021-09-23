import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import Video from '../../assets/home.mp4';

const Home = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <video autoPlay muted loop src={Video} className={styles.video} />
        <div className={styles.txtContainer}>
          <h1>WE LOVE <span>MAKEUP</span> </h1>
          <button>
            <NavLink className={styles.button} to="/shop">SHOP</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;