import styles from './style.module.css' 

const ItemDetail = ({name, image, price}) => {
    return (
      <div className={styles.productCardContainer}>
        <img src={image} alt="Make up cosmetic"/>
        <div className={`${styles.name} ${styles.coolLink}`}> {name} </div>
        <div className={`${styles.price} ${styles.coolLink}`}> ${price} </div>

      </div>
    );
  };
  
  export default ItemDetail;