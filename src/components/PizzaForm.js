import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/formSchema";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  toppings: 0,
  substitute: false,
  specialInstructions: "",
};
const initialFormErrors = {
  name: "",
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

  const postNewOrder = (order) => {
    axios
      .post("https://reqres.in/api/orders/", order)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const onSubmit = () => {
    const order = {
      name: formValues.name,
      size: formValues.size,
      sause: formValues.sauce,
      toppings: toppings,
      substitute: formValues.substitute,
      specialInstructions: formValues.specialInstructions,
    };
    return order;
  };

  return (
    <form onSubmit={onSubmit} id='pizza-form'>
      <div className='form-wrapper'>
        <h1>Build Your Own Pizza</h1>
        <div className='form' id='size-dropdown'>
          <div className='Title'>
            <h2>Information</h2>
            <i>required</i>
          </div>
          <label>
            Name:
            <input id='name-input' type='text' name='name' onChange={onChange} />
          </label>
          <div className='errors' id='nameError'>
            {formErrors.name}
          </div>
        </div>
        <div className='form' id='size-dropdown'>
          <div className='Title'>
            <h2>Choice of size</h2>
            <i>required</i>
          </div>
          <label>
            Size
            <select name='size' id='size-dropdown' onChange={onChange}>
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
            <input
              type='radio'
              name='sauce'
              value='originalRed'
              id='originalRed'
              onChange={onChange}
            />
            Original Red
          </label>
          <label>
            <input
              type='radio'
              name='sauce'
              value='galricRanch'
              id='galricRanch'
              onChange={onChange}
            />
            Garlic Ranch
          </label>
          <label>
            <input type='radio' name='sauce' value='BBQSause' id='BBQSause' onChange={onChange} />
            BBQ Sauce
          </label>
          <label>
            <input type='radio' name='sauce' value='' id='spinichAlfredo' onChange={onChange} />
            Spinach Alfredo
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Add Toppins</h2>
            <i>Choose up to 10</i>
          </div>
          <div className='allToppings'>
            <div className='toppingGroup'>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='pepperoni'
                  id='pepperoni'
                  onChange={onChange}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='sausage'
                  id='sausage'
                  onChange={onChange}
                />
                Sausage
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='canadianBacon'
                  id='canadianBacon'
                  onChange={onChange}
                />
                Canadian Bacon
              </label>
            </div>
            <div className='toppingGroup'>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='spicyItalianSausage'
                  id='spicyItalianSausage'
                  onChange={onChange}
                />
                Spicy Italian Sausage
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='grilledChicken'
                  id='grilledChicken'
                  onChange={onChange}
                />
                Grilled Chicken
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='onions'
                  id='onions'
                  onChange={onChange}
                />
                Onions
              </label>
            </div>
            <div className='toppingGroup'>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='greenPepper'
                  id='greenPepper'
                  onChange={onChange}
                />
                Green Pepper
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='dicedTomatoes'
                  id='dicedTomatoes'
                  onChange={onChange}
                />
                Diced Tomatoes
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='blackOlive'
                  id='blackOlive'
                  onChange={onChange}
                />
                Black Olives
              </label>
            </div>
            <div className='toppingGroup'>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='rostedGarlic'
                  id='rostedGarlic'
                  onChange={onChange}
                />
                Rosted Garlic
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='artichokeHearts'
                  id='artichokeHearts'
                  onChange={onChange}
                />
                Artichoke Hearts
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='threeCheese'
                  id='threeCheese'
                  onChange={onChange}
                />
                Three Cheese
              </label>
            </div>
            <div className='toppingGroup'>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='pineapple'
                  id='pineapple'
                  onChange={onChange}
                />
                Pineapple
              </label>
              <label>
                <input
                  type='checkbox'
                  name='toppings'
                  value='extraCheese'
                  id='extraCheese'
                  onChange={onChange}
                />
                Extra Cheese
              </label>
            </div>
          </div>
          <div className='errors' id='toppingsError'>
            {formErrors.toppings}
          </div>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Choice of substitute</h2>
          </div>
          <label>
            <input
              id='substitute'
              type='checkbox'
              name='substitute'
              value='glutenFree'
              onChange={onChange}
            />
            Gluten Free Crust (+ $1.00)
          </label>
        </div>
        <div className='form'>
          <div className='Title'>
            <h2>Special Instructions</h2>
          </div>
          <label>
            Anything else youd like to add:
            <input id='special-text' type='text' name='specialInstructions' onChange={onChange} />
          </label>
        </div>
        <Link to='/pizza/success'>
          <button id='order-button' disabled={disabled}>
            submit
          </button>
        </Link>
      </div>
    </form>
  );
}
