import styles from './style.module.css' 

const Category = ({onClick, category}) => {
    return (
      <div>
        <li onClick={onClick} className={styles.categoryContainer}>
            {category}
        </li>
       </div>
    );
  }
  
  export default Category;