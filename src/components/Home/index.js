import React from 'react';
import styles from './style.module.css';


const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <video autoPlay muted loop className={styles.video}>
        <source src="https://vod-progressive.akamaized.net/exp=1631603794~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4181%2F23%2F595906523%2F2804939859.mp4~hmac=c4344053ece5afe3befcb5a61f038dfd153d15abb23ca2d8b510a6ccb0c74f81/vimeo-prod-skyfire-std-us/01/4181/23/595906523/2804939859.mp4?filename=pexels-thirdman-9401750.mp4" type="video/mp4"/>
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