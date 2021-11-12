import React from 'react';
import styles from './style.module.css';
import { connect } from 'react-redux';
import { addQuantity, emptyCart, subQuantity } from '../../redux/actions/actions';
import CartList from '../CartList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const CartModal = ({ selectedProducts, removeCart }) => {

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.mainContainer}>
            <div className={styles.removeCart} onClick={removeCart}>
              <FontAwesomeIcon  icon={faTimesCircle} className={styles.closeIcon} />
            </div>
            {selectedProducts && selectedProducts.length > 0 ? (
              <div className={styles.productCardContainer}>
                <div className={styles.currentProducts}>
                  {console.log(selectedProducts[0][0])}
                  {selectedProducts.map(product => (
                    <CartList
                      product={product[0]}
                      id={product[0].id}
                    />
                  ))}
                </div>
              </div>
            ) :
              (<div className={styles.emptyContainer}>
                <h4>Your cart is empty </h4>
                <p>Go to shop!</p>
              </div>)}
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
    addQuantity: () => dispatch(addQuantity()),
    subQuantity: () => dispatch(subQuantity()),
    emptyCart: () => dispatch(emptyCart())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
