import styles from './style.module.css' 

const ProductCard = ({name, image}) => {
    return (
      <div className={styles.productCardContainer}>
        <li className={styles.name}> {name} </li>
        <img src={image}/>
      </div>
    );
  };
  
  export default ProductCard;