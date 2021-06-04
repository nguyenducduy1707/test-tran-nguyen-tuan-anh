import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';

import Product from './pages/Product';
// import ProductDetail from "./pages/ProductDetail";
import Module from './pages/Module';
import UpdateModule from './pages/UpdateModule';

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <div style={{ display: 'flex' }}>
          <Menu />
          <Switch>
            <Route exact path="/" component={Product} />
            {/* <Route path="/product-detail/:id" component={ProductDetail} /> */}
            <Route path="/module-add" component={Module} />
            <Route path="/module-update/:id" component={UpdateModule} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Routes;
