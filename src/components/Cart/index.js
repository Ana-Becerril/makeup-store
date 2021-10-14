import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { addQuantity, emptyCart, removeFromCart, subQuantity } from '../../redux/actions/actions';

const Cart = ({ currentProducts }) => {

  return (
    <>
      <Helmet>
        <style>{`body {
                  overflow-y: hidden; 
                }`}
        </style>
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.emptyContainer}>
          <h4>Your cart is <span>empty :(</span> </h4>
          <div className={styles.productCardContainer}>
            <div className={styles.price}> {currentProducts} </div>
            <button>
              <NavLink className={styles.button} to="/shop">SHOP</NavLink>
            </button>
          </div>
        </div>
      </div>
      </>
      );
};

 const mapStateToProps = state=> {
   return { 
   currentProducts: state.selectedProducts
    };
  }
 
 const mapDispatchToProps = dispatch => {
   return{
     removeFromCart: ()=> dispatch(removeFromCart()),
     addQuantity: ()=> dispatch(addQuantity()),
     subQuantity: ()=> dispatch(subQuantity()),
     emptyCart: ()=> dispatch(emptyCart())
   }
 }

  


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
