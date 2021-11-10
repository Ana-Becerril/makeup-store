import React, { useState, useRef } from 'react';
import styles from './style.module.css'
import { connect } from 'react-redux';
import { addToCart, incrementCounter } from '../../redux/actions/actions';

const ProductCard = ({ name, image, price, showDetail, itemFilter, currentCounter, updateCounter, updateCart,id}) => {

  const [titleButton, setTitleButton] = useState("ADD TO CART");


  const button = useRef();
  const onButtonClick = () => {
  button.current.style.backgroundColor = "#FCA3B9";
  button.current.style.boxShadow= "0 0 0 white";
  button.current.style.margin= "6px 10px 2px 10px";
  setTitleButton("ADDED!")
  setTimeout(() => {
      button.current.style.backgroundColor = "#6184C6";
      button.current.style.boxShadow= "2px 1px 2px gray";
      button.current.style.margin= "4px 10px 4px 10px";
        setTitleButton("ADD TO CART")
  }, 700);
  };

    return (
      <div className={styles.productCardContainer}>
        <img src={image} alt={name}/>
        <div 
        onClick={function(event){ showDetail(); itemFilter()}}
        className={`${styles.name} ${styles.coolLink}`}> {name} </div>
        <div className={`${styles.price} ${styles.coolLink}`}> ${price} </div>
        <div className={styles.btnContainer}>
          <button 
          onClick={function(event){ updateCounter(currentCounter); updateCart(id); onButtonClick()}} 
          className={styles.btnModalProductCard}
          ref={button}> {titleButton} </button>
          </div>
      </div>
    );
  };

  const mapDispatchToProps = dispatch => ({
    updateCounter: state => dispatch(incrementCounter(state)),
    updateCart: id => dispatch(addToCart(id))
  });
  
  
  export default connect(null, mapDispatchToProps)(ProductCard);