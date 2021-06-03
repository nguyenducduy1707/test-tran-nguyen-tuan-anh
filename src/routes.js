import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";

import Product from "./pages/Product";
// import ProductDetail from "./pages/ProductDetail";
import Module from "./pages/Module";

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <div style={{ display: "flex" }}>
          <Menu />
          <Switch>
            <Route exact path="/" component={Product} />
            {/* <Route path="/product-detail/:id" component={ProductDetail} /> */}
            <Route path="/module/:id" component={Module} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Routes;
