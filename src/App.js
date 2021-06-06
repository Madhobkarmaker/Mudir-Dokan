import React, { useState } from "react";
import Cart from "./Components/Cart/cart";
import Product_category from "./Components/Product_category/Product_category";
import Product from "./Components/Product_category/Product";
import Product_cart from "./Components/Product_category/Product_cart";
import My_cart from "./Components/My_cart/My_cart";
import Registered_customer from "./Components/Registered_customer/Registered_customer";
import Create_account from "./Components/Registered_customer/Create_account";
import Input from "./Components/Input/Input";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Cart styles={{ width: "300px" }} /> */}
        {/* <Product_category /> */}
        {/* <Product /> */}
        {/* <Product_cart /> */}
        {/* <My_cart /> */}
        <Switch>
          <Route path="/login">
            <Registered_customer />
          </Route>
          <Route path="/register">
            <Create_account />
          </Route>
        </Switch>
        {/* <Profile /> */}
      </div>
    </Router>
  );
}

export default App;
