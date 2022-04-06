import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='home'>
      <div className='home-left'>
        <h1>Your favorite food</h1>
        <h1>Deliverd while coding</h1>
        <p>
          Create your own pizza with your choice of size, sauces, and premium quality ingredients.
          You can even make it gluten free!
        </p>
        <Link to='/pizza'>Pizza?</Link>
      </div>
      <div className='home-right'>
        <img src='https://www.eeatit.com/wp-content/uploads/2020/12/cheese-pizza.png' alt='' />
        <h1>Original</h1>
        <p>Made with the best ingredients</p>
        <Link to={`/pizza`}>Order Now</Link>
      </div>
    </div>
  );
}
