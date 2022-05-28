import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/Foodbox.jsx';
import foods from './foods.json';

function App() {
  console.log(foods)
  return (
    <div className="App">
       {foods.map((dish)=> {
          return (
            <FoodBox key={dish.name} food={dish}/>
          )
          })}
    </div>
  );
}

export default App;
