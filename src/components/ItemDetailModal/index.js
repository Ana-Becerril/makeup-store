import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
// import { addToCart, incrementCounter } from '../../redux/actions/actions';


const ItemDetailModal = ({ name, image, price, description, removeItemDetail}) => {


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
          </div>
      </div>
    </>
  );
}

export default ItemDetailModal;
