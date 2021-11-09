import styles from './style.module.css'

const CartList = ({product}) => {
    console.log(product);
    return (
    <>
      <div className= {styles.cartListContainer}>
        <div className={styles.cartProduct}>
        <img className={styles.cartListImage} src={product.image_link} alt={product.name}/>
        <div className={styles.name}> {product.name} </div>
        </div>
      </div>
    </>
    );
  };
  
  export default CartList;