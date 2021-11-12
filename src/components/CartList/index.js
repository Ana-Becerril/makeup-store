import React, { useState} from 'react';
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { removeFromCart, decrementCounter } from '../../redux/actions/actions';

const CartList = ({ product, updateCartList, id, updateCounter, currentCounter }) => {


  console.log(product);
  return (
    <>
      <div className={styles.cartListContainer}>
        <div className={styles.cartProduct}>
          <img className={styles.cartListImage} src={product.image_link} alt={product.name} />
          <div className={styles.name}> {product.name} </div>
          <div className={styles.removeItem}>
            <FontAwesomeIcon 
            onClick={function(event){ updateCartList(id); updateCounter(currentCounter)}}
            icon={faTimesCircle} 
            className={styles.removeIcon} />
          </div>

        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateCounter: state => dispatch(decrementCounter(state)),
    updateCartList: id => dispatch(removeFromCart(id)),
  }
}




export default connect(null, mapDispatchToProps)(CartList);