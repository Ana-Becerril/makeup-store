import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Cart from './components/Cart'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;