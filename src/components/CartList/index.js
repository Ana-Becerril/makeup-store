import styles from './style.module.css'

const CartList = ({product}) => {
    console.log(product);
    return (
      <div className= {styles.cartListContainer}>
        <div className={styles.cartProduct}>
        <img src={product.image_link} alt={product.name}/>
        <li className={`${styles.name} ${styles.coolLink}`}> {product.name} </li>
        </div>
      </div>
    );
  };
  
  export default CartList;