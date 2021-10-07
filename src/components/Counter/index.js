import { connect } from 'react-redux';
import styles from './style.module.css';

const Counter = ({ currentCounter }) => {
     return (
          <div className={styles.marker}>{currentCounter}</div>
     )
}

const mapStateToProps = state => {
     return {
          currentCounter: state.counter
     };
};

export default connect(mapStateToProps, null)(Counter);
