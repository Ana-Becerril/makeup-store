import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Cart from './components/Cart'
import styles from './App.css'

const Routes = () => {

  return (
    <BrowserRouter>
    <div className={styles.main}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default Routes;