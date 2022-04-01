import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import PizzaFormSuccess from "./components/PizzaFormSuccess";

const App = () => {
  return (
    <div id='size-dropdown'>
      <nav>
        <img
          src='https://seeklogo.com/images/P/pizza-logo-D075E874ED-seeklogo.com.png'
          alt='logo'
        />
        <Link to='/'>Home</Link>
      </nav>
      <Switch>
        <Route path={`/pizza/success`}>
          <PizzaFormSuccess />
        </Route>
        <Route path='/pizza/:sizeID'>
          <PizzaForm />
        </Route>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
