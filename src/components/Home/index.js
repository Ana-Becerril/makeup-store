import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import Video from '../../assets/home.mp4';
import { Helmet } from "react-helmet";


const Home = () => {

  return (
    <>
      <Helmet>
        <style>{`body {
              background-color: #FCA3B9;
            }`}
        </style>
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.top}>
          <div className={styles.wrapper}>
            <div className={styles.gradient}>
              <video autoPlay muted loop src={Video} className={styles.video} />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.txtContainer}>
            <h1>WE LOVE <span>MAKEUP</span> </h1>
            <div className={styles.btnContainer}>
              <div className={styles.button}>
                <NavLink className={styles.cta} to="/shop">SHOP</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;