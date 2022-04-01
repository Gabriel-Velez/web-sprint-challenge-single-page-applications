import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Your favorite food</h1>
        <h1>Deliverd while coding</h1>
        <p>Whos hungry?</p>
        <Link to='/pizza'>Pizza?</Link>
      </div>
      <div>
        <img src='https://www.eeatit.com/wp-content/uploads/2020/12/cheese-pizza.png' alt='' />
        <form>
          <label>
            small
            <input type='radio' name='sizeSelect' value='small' />
          </label>
          <label>
            medium
            <input type='radio' name='sizeSelect' value='medium' />
          </label>
          <label>
            large
            <input type='radio' name='sizeSelect' value='large' />
          </label>
        </form>
        <Link to='/pizza'>Order Now</Link>
      </div>
    </div>
  );
}
