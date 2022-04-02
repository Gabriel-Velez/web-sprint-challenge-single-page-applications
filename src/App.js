import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import PizzaFormSuccess from "./components/PizzaFormSuccess";

const App = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <img
            src='https://seeklogo.com/images/P/pizza-logo-D075E874ED-seeklogo.com.png'
            alt='logo'
            className='nav-logo'
          />
          Lambda Eats
        </div>
        <div className='nav-link'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <div className='wrapper'>
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
    </>
  );
};
export default App;
