import React, { useRef } from 'react';
import styles from './style.module.css'
import { connect } from 'react-redux';
import { addToCart, incrementCounter } from '../../redux/actions/actions';

const ProductCard = ({ name, image, price, showDetail, itemFilter, currentCounter, updateCounter, updateCart,id}) => {

  const button = useRef();
  const onButtonClick = () => {
  button.current.style.backgroundColor = "red";
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
          ref={button}> ADD TO CART </button>
          </div>
      </div>
    );
  };

  const mapDispatchToProps = dispatch => ({
    updateCounter: state => dispatch(incrementCounter(state)),
    updateCart: id => dispatch(addToCart(id))
  });
  
  
  export default connect(null, mapDispatchToProps)(ProductCard);