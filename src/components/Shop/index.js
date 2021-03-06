import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import axios from "axios";
import Category from '../Category';
import ProductCard from '../ProductCard';
import ItemDetailModal from '../ItemDetailModal';
import { Helmet } from "react-helmet";
import { getProducts } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const Shop = ({ getProducts }) => {

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [endPoint, setEndPoint] = useState("products");
  const [itemDetail, setItemDetail] = useState(false);
  const [productObject, setProductObject] = useState({});
  const [isLoading, setIsLoading] = useState(false)
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

  let ref1 = useRef(null);
  function scrollTo(ref) {
    ref.current.style.display = "flex";
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${endPoint}`)
        .then(response => {
          setProducts(response.data);
          getProducts(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchData();
  }, [endPoint, getProducts])

  return (
    <>
      <Helmet>
        <style>{`body {
                  overflow-y: hidden; 
                }`}
        </style>
      </Helmet>
      <div className={styles.mainShop}>
        <div className={styles.leftContainer}>
          <h2>CATEGORIES</h2>
          <div className={styles.categoriesContainer}>
            <ul className={styles.itemsList}>
              {category.map(el => (
                <Category
                  key={el.name}
                  onClick={() => {
                    setTitle(el.category);
                    setEndPoint(el.name);
                    scrollTo(ref1);
                  }}
                  category={el.category} />))}
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer} ref={ref1} >
          {!isLoading && products && products.length > 0 ? (
            <div className={styles.cardsContainer} >
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
            </div>) :
            <div className={styles.loadingioSpinnerRipple7qf9z3gmdsf}><div className={styles.ldioslltv1fy49}>
              <div></div><div></div>
            </div></div>
            }
          {itemDetail ?
            <ItemDetailModal
              id={productObject.id}
              name={productObject.name}
              image={productObject.image_link}
              price={productObject.price}
              description={productObject.description}
              removeItemDetail={removeItemDetail}
            /> : null}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  getProducts: products => dispatch(getProducts(products))
});

export default connect(null, mapDispatchToProps)(Shop);