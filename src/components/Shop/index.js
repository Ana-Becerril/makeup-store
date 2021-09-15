import React, {useState, useEffect} from 'react';
import styles from './style.module.css';
import axios from "axios";
import Category from '../Category';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("")
  const [endPoint, setEndPoint] = useState("blush")
  const category =
    [{ name:"blush", category: "Blush" },
    { name: "bronzer", category: "Bronzer" },
    { name: "eyebrow", category: "Eyebrow" },
    { name: "eyeliner", category: "Eyeliner" },
    { name: "eyeshadow", category: "Eyeshadow" },
    { name: "foundation", category: "Foundation" },
    { name: "lipLiner", category: "Lip liner" },
    { name: "lipstick", category: "Lipstick" },
    { name: "mascara", category: "Mascara" },
    { name: "nailPolish", category: "Nail polish" }]

  useEffect(() => {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${endPoint}`)
    .then(response =>{
      console.log(response.data)
      setProducts(response.data)
    })  
    .catch(error =>{
      console.log(error)
    })
  }, [setEndPoint(endPoint)])

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h2>CATEGORIES</h2>
          <div className={styles.categoriesContainer}>
            <ul>
              {category.map(el => (
                <Category
                  onClick={() => setTitle(el.category), setEndPoint(el.name)}
                  category={el.category} />))}
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
        <div className={styles.cardsContainer}>
          <h2>{title}</h2>
          <ul>
            {products && products.lenght > 0 ? products.map(product =><li 
            key={product.id}>{product.name}</li>) : null}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;