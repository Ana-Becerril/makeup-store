import React from 'react';
import styles from './style.module.css';
import {useState, useEffect} from 'react';
import axios from "axios";

const client = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/api/v1/products.json" 
});

const Shop = () => {

  const [title, setTitle] = useState("")
   const [products, setProducts] = useState(null);
  
  // useEffect(() => {
  //   client.get("/product_type").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);


    return (
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h2>CATEGORIES</h2>
          <ul>
            <li  onClick={() => setTitle("Blush")}>Blush</li>
            <li  onClick={() => setTitle("Bronzer")}>Bronzer</li>
            <li  onClick={() => setTitle("Eyebrow")}>Eyebrow</li>
            <li  onClick={() => setTitle("Eyeliner")}>Eyeliner</li>
            <li  onClick={() => setTitle("Eyeshadow")}>Eyeshadow</li>
            <li  onClick={() => setTitle("Foundation")}>Foundation</li>
            <li  onClick={() => setTitle("Lip liner")}>Lip liner</li>
            <li  onClick={() => setTitle("Lipstick")}>Lipstick</li>
            <li  onClick={() => setTitle("Mascara")}>Mascara</li>
            <li  onClick={() => setTitle("Nail polish")}>Nail polish</li>
          </ul>
        </div>
        <div className={styles.rightContainer}>
          <h2>{title}</h2>
        </div>
      </div>
    );
  };
  
  export default Shop;