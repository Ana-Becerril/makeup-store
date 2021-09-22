import styles from './style.module.css';

const Counter = () => {

    const count = JSON.parse(localStorage.getItem('itemsincart'))

    return (

     <div className={styles.marker}>{count}</div>
               
    );}

export default Counter;