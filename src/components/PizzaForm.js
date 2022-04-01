import React from "react";

export default function PizzaForm(props) {
  //   const { values, submit, change, disabled, errors } = props;

  //   const onSubmit = (evt) => {
  //     evt.preventDefault();
  //     submit();
  //   };
  const onSubmit = () => {};

  //   const onChange = (evt) => {
  //     const { name, value, checked, type } = evt.target;
  //     const valueToUse = type === "checkbox" ? checked : value;
  //     change(name, valueToUse);
  //   };
  const onChange = () => {};

  return (
    <form onSubmit={onSubmit}>
      <div className='form-wrapper'>
        <h1>Build Your Own Pizza</h1>
        <div className='form'>
          <div className='Title'>
            <h2>Choice of size</h2>
            <i>required</i>
          </div>
          <label>
            Size:
            <select name='size'>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Choice of sauce</h2>
            <i>required</i>
          </div>
          <label>
            <input type='radio' name='sause' value='originalRed' />
            Original Red
          </label>
          <label>
            <input type='radio' name='sause' value='galricRanch' />
            Garlic Ranch
          </label>
          <label>
            <input type='radio' name='sause' value='BBQSause' />
            BBQ Sauce
          </label>
          <label>
            <input type='radio' name='sause' value='spinichAlfredo' />
            Spinach Alfredo
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Add Toppins</h2>
            <i>Choose up to 10</i>
          </div>
          <label>
            <input type='checkbox' name='toppings' value='pepperoni' />
            Pepperoni
          </label>
          <label>
            <input type='checkbox' name='toppings' value='sausage' />
            Sausage
          </label>
          <label>
            <input type='checkbox' name='toppings' value='canadianBacon' />
            Canadian Bacon
          </label>
          <label>
            <input type='checkbox' name='toppings' value='spicyItalianSausage' />
            Spicy Italian Sausage
          </label>
          <label>
            <input type='checkbox' name='toppings' value='grilledChicken' />
            Grilled Chicken
          </label>
          <label>
            <input type='checkbox' name='toppings' value='onions' />
            Onions
          </label>
          <label>
            <input type='checkbox' name='toppings' value='greenPepper' />
            Green Pepper
          </label>
          <label>
            <input type='checkbox' name='toppings' value='dicedTomatoes' />
            Diced Tomatoes
          </label>
          <label>
            <input type='checkbox' name='toppings' value='blackOlive' />
            Black Olives
          </label>
          <label>
            <input type='checkbox' name='toppings' value='rostedGarlic' />
            Rosted Garlic
          </label>
          <label>
            <input type='checkbox' name='toppings' value='artichokeHearts' />
            Artichoke Hearts
          </label>
          <label>
            <input type='checkbox' name='toppings' value='threeCheese' />
            Three Cheese
          </label>
          <label>
            <input type='checkbox' name='toppings' value='pineapple' />
            Pineapple
          </label>
          <label>
            <input type='checkbox' name='toppings' value='extraCheese' />
            Extra Cheese
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Choice of substitute</h2>
          </div>
          <label>
            <input type='checkbox' name='substitute' value='glutenFree' />
            Gluten Free Crust (+ $1.00)
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Special Instructions</h2>
          </div>
          <label>
            Anything else youd like to add:
            <input type='text' name='specialInstructions' />
          </label>
        </div>
        <button id='submitBtn' disabled={true}>
          submit
        </button>
        <div className='errors'>
          {/* <div id='firstNameError'>{errors.first_name}</div>
          <div id='lastNameError'>{errors.last_name}</div>
          <div id='emailError'>{errors.email}</div>
          <div id='passwordError'>{errors.password}</div>
        <div id='tosError'>{errors.tos}</div> */}
        </div>
      </div>
    </form>
  );
}
