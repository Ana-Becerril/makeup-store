import React from 'react';
import styles from './style.module.css';


const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <video autoplay muted loop className={styles.video}>
        <source src="https://vod-progressive.akamaized.net/exp=1631329691~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4181%2F23%2F595906523%2F2804939859.mp4~hmac=c9f286afba5d2fd1aea511794b1c71197f74a61c58fd4266ce21baed3a71f915/vimeo-prod-skyfire-std-us/01/4181/23/595906523/2804939859.mp4?filename=pexels-thirdman-9401750.mp4"/>
        </video>
        <div className={styles.txtContainer}>
        <h1>WE LOVE <span>MAKEUP</span> </h1>
        <button>SHOP</button>
        </div>
      </div>
    </div>
  );
}
  export default Home;