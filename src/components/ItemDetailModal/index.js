import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementCounter } from '../../redux/actions/actions';


const ItemDetailModal = ({ name, image, price, description, removeItemDetail, incrementCounter,currentCounter, updateCounter }) => {


  return ( 
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.removeItemDetail}onClick={removeItemDetail}>
            <FontAwesomeIcon icon={faTimesCircle} className={styles.closeIcon} />
          </div>
          <div className={styles.productCardContainer}>
            <img src={image} alt={name} />
            <div className={styles.name}> {name} </div>
            <div className={styles.price}> ${price} </div>
          </div>
          <div className={styles.description}> {description} </div>
          <div className={styles.btnContainer}>
          <button onClick={updateCounter.bind(null, currentCounter)} className={styles.btnModal}> ADD TO CART </button>
          <NavLink className={styles.btnModal} to="/cart"> SEE CART </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    currentCounter: state.counter
  };
};

const mapDispatchToProps = dispatch => ({
  updateCounter: state => dispatch(incrementCounter(state))
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailModal);
