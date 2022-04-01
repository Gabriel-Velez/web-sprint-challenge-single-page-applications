import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [size, setSize] = useState("");

  const onChange = (evt) => {
    const { value } = evt.target;
    setSize(value);
  };

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
            <input type='radio' name='sizeSelect' value='small' onChange={onChange} />
            small
          </label>
          <label>
            <input type='radio' name='sizeSelect' value='medium' onChange={onChange} />
            medium
          </label>
          <label>
            <input type='radio' name='sizeSelect' value='large' onChange={onChange} />
            large
          </label>
        </form>
        <Link to={`/pizza/${size}`}>Order Now</Link>
      </div>
    </div>
  );
}
