import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/Foodbox.jsx';
import AddFoodForm from './components/AddFoodForm.jsx';
import foods from './foods.json';

function App() {
  foods.forEach(food => food.id = Math.random())

  const [foodArray, setFoodArray] = useState(foods)
  const [showForm, setShowForm] = useState(false);

  const handleShow = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  const addNewFood = (newFood) => {
    setFoodArray([...foodArray, newFood])
  }
  

  return (
    <div className="App">
       {foodArray.map((dish)=> {
          return (
            <FoodBox key={dish.id} food={dish}/>
          )
          })}
        <button className="button" onClick={handleShow}>Add Dish</button>
        {showForm && <AddFoodForm addFood={addNewFood}/>}
    </div>
  );
}

export default App;
