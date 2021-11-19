import styles from './style.module.css' 

const Category = ({onClick, category}) => {
    return (
      <a href="#scroll">
        <li onClick={onClick} className={styles.categoryContainer}>
            {category}
        </li>
       </a>
    );
  }
  
  export default Category;