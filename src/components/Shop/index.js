import React from 'react';
import styles from './style.module.css';
import {useState, useEffect} from 'react';
import axios from "axios";
const Shop = () => {

  const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json"

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);


    return (
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h2>CATEGORIES</h2>
          <ul>
            <li>Blush</li>
            <li>Bronzer</li>
            <li>Eyebrow</li>
            <li>Eyeliner</li>
            <li>Eyeshadow</li>
            <li>Foundation</li>
            <li>Lip liner</li>
            <li>Lipstick</li>
            <li>Mascara</li>
            <li>Nail polish</li>
          </ul>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    );
  };
  
  export default Shop;