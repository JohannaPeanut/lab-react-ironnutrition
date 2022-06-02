import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/Foodbox.jsx';
import AddFoodForm from './components/AddFoodForm.jsx';
import TodayFoodList from './components/TodayFoodList.jsx';
import Search from './components/Search.jsx';
import foods from './foods.json';

function App() {

  foods.forEach(food => food.id = Math.random())

  const [foodArray, setFoodArray] = useState(foods)
  const [showForm, setShowForm] = useState(false);
  const [todayFood, setTodayFood] = useState([])

  const handleShow = () => {
    setShowForm(!showForm);
  }

  const addNewFood = (newFood) => {
    setFoodArray([...foodArray, newFood])
  }

  const filterFood = (search) => {
    const newArray = foods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
    setFoodArray(newArray)
  }
  
  const addFoodTodayList = (food) => {
    console.log(food)
    const newArray = [...todayFood, food]
    setTodayFood(newArray)
    console.log(todayFood)
  }

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <Search filterFunction={filterFood}/>
      <div className="columns">
        <div className="column">
          <button className="button" onClick={handleShow}>Add Dish</button>
            {showForm && <AddFoodForm toggleForm={handleShow} addFood={addNewFood}/>}
           {foodArray.map((dish)=> {
              return (
                <FoodBox key={dish.id} food={dish} addFood={addFoodTodayList}/>
              )
              })}
        </div>
        <div className="column">      
          <TodayFoodList food={todayFood}/>
        </div>
      </div>
    </div>
  );
}

export default App;
