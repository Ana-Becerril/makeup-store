import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { addQuantity, emptyCart, removeFromCart, subQuantity } from '../../redux/actions/actions';
import CartList from '../CartList';

const Cart = ({ selectedProducts }) => {

  return (
    <>
      {/* <Helmet>
        <style>{`body {
                  overflow-y: hidden; 
                }`}
        </style>
      </Helmet> */}
      <div className={styles.mainContainer}>
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
          <h4>Your cart is <span>empty :(</span> </h4>
        </div> ) }
        {/* <button>
              <NavLink className={styles.button} to="/shop">SHOP</NavLink>
            </button> */}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedProducts: state.selectedProducts
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




export default connect(mapStateToProps, mapDispatchToProps)(Cart);
