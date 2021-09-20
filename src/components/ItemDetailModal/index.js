import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';



const ItemDetailModal = ({ name, image, price, removeItemDetail }) => {

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div onClick={removeItemDetail}>
            <FontAwesomeIcon icon={faTimesCircle} className={styles.closeIcon} />
          </div>
          <div className={styles.productCardContainer}>
            <img src={image} alt="Make up cosmetic" />
            <div> {name} </div>
            <div> ${price} </div>
          </div>
          <div className={styles.btnContainer}>
          <NavLink className={styles.btnModal} to="/cart"> SHOP </NavLink>
          <NavLink className={styles.btnModal} to="/cart"> ADD TO CART </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemDetailModal;