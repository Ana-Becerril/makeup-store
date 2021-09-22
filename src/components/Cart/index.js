import styles from './style.module.css';

const Cart = ({ onAdd, onRemove, name, price }) => {
  return (
    <div className={styles.mainContainer}>
     
      <div className={styles.name}> {name} </div>
      <div className={styles.price}> ${price} </div>
      <div className={styles.btnContainer}>
      <button onClick={onAdd}> + </button>
      <button onClick={onRemove}> - </button>
      </div>
    </div>
  );
};

export default Cart;