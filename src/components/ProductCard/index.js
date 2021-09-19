import styles from './style.module.css' 

const ProductCard = ({name, image, price, detailHandler}) => {
    return (
      <div onClick={detailHandler} className={styles.productCardContainer}>
        <img src={image} alt="Make up cosmetic"/>
        <div className={`${styles.name} ${styles.coolLink}`}> {name} </div>
        <div className={`${styles.price} ${styles.coolLink}`}> ${price} </div>

      </div>
    );
  };
  
  export default ProductCard;