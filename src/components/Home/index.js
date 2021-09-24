import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import Video from '../../assets/home.mp4';

const Home = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.top}>
        <video autoPlay muted loop src={Video} className={styles.video} />
        </div>
        <div className={styles.bottom}>
        <div className={styles.txtContainer}>
          <h1>WE LOVE <span>MAKEUP</span> </h1>
          <div className={styles.button}>
            <NavLink className={styles.cta} to="/shop">SHOP</NavLink>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Home;