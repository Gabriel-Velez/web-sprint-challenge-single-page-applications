import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/formSchema";
import { Link } from "react-router-dom";

const initialFormValues = {
  size: "",
  sauce: "",
  toppings: 0,
  substitute: false,
  specialInstructions: "",
};
const initialFormErrors = {
  size: "",
  sauce: "",
  toppings: "",
};

export default function PizzaForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [toppings, setToppings] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    if (name === "toppings") {
      if (checked === true) {
        setToppings([...toppings, value]);
        setFormValues({
          ...formValues,
          [name]: toppings.length + 1,
        });
      } else {
        const newToppings = toppings.filter(function (top) {
          if (top != value) {
            return top;
          }
          setFormValues({
            ...formValues,
            [name]: toppings.length - 1,
          });
        });
        setToppings(newToppings);
      }

      validate(name, toppings.length + 1);
    } else {
      setFormValues({
        ...formValues,
        [name]: valueToUse,
      });
      validate(name, value);
    }
  };

  const onSubmit = () => {
    const order = {
      size: formValues.size,
      sause: formValues.sauce,
      toppings: toppings,
      substitute: formValues.substitute,
      specialInstructions: formValues.specialInstructions,
    };
    return order;
  };

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
            <input type='radio' name='size' value='small' onChange={onChange} />
            Small
          </label>
          <label>
            <input type='radio' name='size' value='medium' onChange={onChange} />
            Medium
          </label>
          <label>
            <input type='radio' name='size' value='large' onChange={onChange} />
            Large
          </label>
          <label></label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Choice of sauce</h2>
            <i>required</i>
          </div>
          <label>
            <input type='radio' name='sauce' value='originalRed' onChange={onChange} />
            Original Red
          </label>
          <label>
            <input type='radio' name='sauce' value='galricRanch' onChange={onChange} />
            Garlic Ranch
          </label>
          <label>
            <input type='radio' name='sauce' value='BBQSause' onChange={onChange} />
            BBQ Sauce
          </label>
          <label>
            <input type='radio' name='sauce' value='spinichAlfredo' onChange={onChange} />
            Spinach Alfredo
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Add Toppins</h2>
            <i>Choose up to 10</i>
          </div>
          <label>
            <input type='checkbox' name='toppings' value='pepperoni' onChange={onChange} />
            Pepperoni
          </label>
          <label>
            <input type='checkbox' name='toppings' value='sausage' onChange={onChange} />
            Sausage
          </label>
          <label>
            <input type='checkbox' name='toppings' value='canadianBacon' onChange={onChange} />
            Canadian Bacon
          </label>
          <label>
            <input
              type='checkbox'
              name='toppings'
              value='spicyItalianSausage'
              onChange={onChange}
            />
            Spicy Italian Sausage
          </label>
          <label>
            <input type='checkbox' name='toppings' value='grilledChicken' onChange={onChange} />
            Grilled Chicken
          </label>
          <label>
            <input type='checkbox' name='toppings' value='onions' onChange={onChange} />
            Onions
          </label>
          <label>
            <input type='checkbox' name='toppings' value='greenPepper' onChange={onChange} />
            Green Pepper
          </label>
          <label>
            <input type='checkbox' name='toppings' value='dicedTomatoes' onChange={onChange} />
            Diced Tomatoes
          </label>
          <label>
            <input type='checkbox' name='toppings' value='blackOlive' onChange={onChange} />
            Black Olives
          </label>
          <label>
            <input type='checkbox' name='toppings' value='rostedGarlic' onChange={onChange} />
            Rosted Garlic
          </label>
          <label>
            <input type='checkbox' name='toppings' value='artichokeHearts' onChange={onChange} />
            Artichoke Hearts
          </label>
          <label>
            <input type='checkbox' name='toppings' value='threeCheese' onChange={onChange} />
            Three Cheese
          </label>
          <label>
            <input type='checkbox' name='toppings' value='pineapple' onChange={onChange} />
            Pineapple
          </label>
          <label>
            <input type='checkbox' name='toppings' value='extraCheese' onChange={onChange} />
            Extra Cheese
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Choice of substitute</h2>
          </div>
          <label>
            <input type='checkbox' name='substitute' value='glutenFree' onChange={onChange} />
            Gluten Free Crust (+ $1.00)
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Special Instructions</h2>
          </div>
          <label>
            Anything else youd like to add:
            <input type='text' name='specialInstructions' onChange={onChange} />
          </label>
        </div>
        <Link to='/pizza/success'>
          <button id='submitBtn' disabled={disabled}>
            submit
          </button>
        </Link>
        <div className='errors'>
          <div>{formErrors.size}</div>
          <div>{formErrors.sauce}</div>
          <div>{formErrors.toppings}</div>
        </div>
      </div>
    </form>
  );
}
