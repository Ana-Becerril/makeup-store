import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { addQuantity, addToCart, emptyCart, removeFromCart, subQuantity } from '../../redux/actions/actions';

const Cart = ({ name, image, price }) => {

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
            <img src={image} alt={name} />
            <div className={styles.name}> {name} </div>
            <div className={styles.price}> ${price} </div>
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
   products: state.products
    };
  }
 
 const mapDispatchToProps = dispatch => {
   return{
     addToCart: ()=> dispatch(addToCart()),
     removeFromCart: ()=> dispatch(removeFromCart()),
     addQuantity: ()=> dispatch(addQuantity()),
     subQuantity: ()=> dispatch(subQuantity()),
     emptyCart: ()=> dispatch(emptyCart())
   }
 }

  


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
