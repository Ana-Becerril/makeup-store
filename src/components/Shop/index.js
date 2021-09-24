import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import axios from "axios";
import Category from '../Category';
import ProductCard from '../ProductCard';
import ItemDetailModal from '../ItemDetailModal';
import ShopMobile from '../ShopMobile'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [endPoint, setEndPoint] = useState("blush");
  const [itemDetail, setItemDetail] = useState(false);
  const [productObject, setProductObject] = useState({});
  // let [cart, setCart] = useState([])

  const removeItemDetail = () => setItemDetail(false);
  const showDetail = () => setItemDetail(true);

  const category =
    [{ name: "blush", category: "Blush" },
    { name: "bronzer", category: "Bronzer" },
    { name: "eyebrow", category: "Eyebrow" },
    { name: "eyeliner", category: "Eyeliner" },
    { name: "eyeshadow", category: "Eyeshadow" },
    { name: "foundation", category: "Foundation" },
    { name: "lipstick", category: "Lipstick" },
    { name: "mascara", category: "Mascara" }]

  function itemFilter(id) {
    const itemId = products.filter(product => product.id === id);
    setProductObject(itemId[0])
    console.log(itemId)
  }

  useEffect(() => {
    function fetchData() {
      axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${endPoint}`)
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
    fetchData();
  }, [endPoint])

  // let localCart = localStorage.getItem("cart");

  // useEffect(() => {
  //   localCart = JSON.parse(localCart);
  //   if (localCart) setCart(localCart)
  // }, [])

  // const addItem = (item) => {
  //   let cartCopy = [...cart];
  //   let {id} = item;
  //   let existingItem = cartCopy.find(cartItem => cartItem.id == id);
  //   if (existingItem) {
  //       existingItem.quantity += item.quantity 
  //   } else { 
  //     cartCopy.push(item)
  //   }
  //   setCart(cartCopy)
  //   let stringCart = JSON.stringify(cartCopy);
  //   localStorage.setItem("cart", stringCart)
  // }

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
        <div className={styles.rightContainer} id="right">
          <div className={styles.cardsContainer}>
            <h3>{title}</h3>
            <div className={styles.productsCard}>
              {products.map(product => (
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image_link}
                  price={product.price}
                  showDetail={showDetail}
                  itemFilter={() => itemFilter(product.id)}
                />
              ))}
            </div>
          </div>
          {itemDetail ? <ItemDetailModal
            id={productObject.id}
            name={productObject.name}
            image={productObject.image_link}
            price={productObject.price}
            description={productObject.description}
            removeItemDetail={removeItemDetail}
            // addItem={()=>addItem(item)}
             /> : null}
        </div>
      </div>
      {/* {cart?
      <Cart
      name={productObject.name}
      image={productObject.image_link}
      price={productObject.price}
      />:null} */}
    </>
  );
};

export default Shop;