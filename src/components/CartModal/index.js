import React, {useState} from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { addQuantity, emptyCart, removeFromCart, subQuantity } from '../../redux/actions/actions';
import CartList from '../CartList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const CartModal = ({ selectedProducts, removeCart }) => {

  return (
    <>
    <div className={styles.modal}>
    <div className={styles.modalContent}>
      <div className={styles.mainContainer}>
      <div className={styles.removeCart}onClick={removeCart}>
            <FontAwesomeIcon icon={faTimesCircle} className={styles.closeIcon} />
          </div> 
        {selectedProducts && selectedProducts.length > 0 ? (
          <div className={styles.productCardContainer}>
          <div className={styles.currentProducts}>
            {selectedProducts.map(product => (
              <CartList
               product={product[0]}
              />
            ))}
          </div>
        </div>
        ) : 
       ( <div className={styles.emptyContainer}>
          <h4>Your cart is empty </h4>
        </div> ) }
        {/* <button>
              <NavLink className={styles.button} to="/shop">SHOP</NavLink>
            </button> */}
      </div>
      </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedProducts: state.selectedProducts,
    
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: () => dispatch(removeFromCart()),
    addQuantity: () => dispatch(addQuantity()),
    subQuantity: () => dispatch(subQuantity()),
    emptyCart: () => dispatch(emptyCart())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
