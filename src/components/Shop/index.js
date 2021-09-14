import React from 'react';
import styles from './style.module.css';
import { useState } from 'react';
import axios from "axios";
import Category from '../Category'

const client = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/api/v1/products.json"
});

const Shop = () => {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState(
    [ {name: "Blush", category: "Blush"},
      {name: "Bronzer", category: "Bronzer"},
      {name: "Eyebrow", category: "Eyebrow"},
      {name: "Eyeliner", category: "Eyeliner"},
      {name: "Eyeshadow", category: "Eyeshadow"},
      {name: "Foundation", category: "Foundation"},
      {name: "LipLiner", category: "Lip liner"},
      {name: "Lipstick", category: "Lipstick"},
      {name: "Mascara", category: "Mascara"},
      {name: "NailPolish", category: "Nail polish"},
    ])


  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h2>CATEGORIES</h2>
        <div className={styles.categoriesContainer}>
        <ul>
          {category.map(el => (
          <Category 
          onClick={() => setTitle(el.category)}
          name={el.name}/>))}

        </ul>
        </div>
      </div>
          <div className={styles.rightContainer}>
        <h2>{title}</h2>
      </div>
    </div>
    </>
  );
};

export default Shop;