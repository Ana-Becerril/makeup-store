import React, {useState, useEffect} from 'react';
import styles from './style.module.css';
import axios from "axios";
import Category from '../Category';
import ProductCard from '../ProductCard';
import { Link } from "react-router-dom";
import ItemDetail from '../ItemDetail';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [endPoint, setEndPoint] = useState("blush");

  const category =
    [{ name:"blush", category: "Blush" },
    { name: "bronzer", category: "Bronzer" },
    { name: "eyebrow", category: "Eyebrow" },
    { name: "eyeliner", category: "Eyeliner" },
    { name: "eyeshadow", category: "Eyeshadow" },
    { name: "foundation", category: "Foundation" },
    { name: "lipLiner", category: "Lip liner" },
    { name: "lipstick", category: "Lipstick" },
    { name: "mascara", category: "Mascara" }]


  useEffect(() => {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${endPoint}`)
    .then(response =>{
      console.log(response.data)
      setProducts(response.data)
    })  
    .catch(error =>{
      console.log(error)
    }) 
  }, [endPoint])

  function detailHandler (product) {
    return ( <>
    <ItemDetail
     id={product.id}
     name={product.name}
     image={product.image_link}
     price={product.price}
    />
    </>)
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h2>CATEGORIES</h2>
          <div className={styles.categoriesContainer}>
            <ul>
              {category.map(el => (
                <Category
                  key={el.name}
                  onClick={() => { 
                    setTitle(el.category);
                    setEndPoint(el.name);   
                  }}
                  category={el.category} />))}
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
        <div className={styles.cardsContainer}>
          <h3>{title}</h3>
          <div className={styles.productsCard}>
             {products.map(product =>(
            <Link  to={`/item/${product.id}`}>
            <ProductCard 
            id={product.id}
            name={product.name}
            image={product.image_link}
            price={product.price}
            detailHandler={()=>{detailHandler(product)}}
            />
            </Link>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;