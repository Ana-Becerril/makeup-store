import { useState, useEffect } from 'react';
import styles from './style.module.css';

const Counter = () => {

    const [count, setCount] = useState([])

    useEffect(() => {
       setCount( JSON.parse(localStorage.getItem('itemsincart')))   
    },[])
    return (

     <div className={styles.marker}>{count.length? count.length: "nosta"}</div>
               
    );}

export default Counter;