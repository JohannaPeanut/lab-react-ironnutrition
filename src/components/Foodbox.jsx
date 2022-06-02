import React from "react";
import { useState } from "react";

const FoodBox = (props) => {

    const [no, setNo] = useState(1)

    const handleInputNoChange = (event) => {
      event.preventDefault()
      const value = event.target.value
      setNo(value)
    }
      
    const handleFoodListAddition = (event) => {
      event.preventDefault()
      const id = Math.random()
      const name = dish.name
      const calories = dish.calories
      const newFood = { id, name, calories, no}
      props.addFood(newFood)
    }

  

    const dish = props.food;
    return (

           <div className="box">
             <form onSubmit={handleFoodListAddition}>
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={dish.image} />
                        </figure>
                      </div>
                      <div className="media-content">
                         <div className="content">
                           <p>
                             <strong>{dish.name}</strong> <br />
                             <small>{dish.calories} cal</small>
                           </p>
                         </div>
                       </div>
                       <div className="media-right">
                         <div className="field has-addons">
                           <div className="control">
                             <input className="input" type="number" value={no} onChange={handleInputNoChange}/>
                           </div>
                           <div className="control">
                             <button className="button is-info">
                               +
                             </button>
                          </div>
                       </div>
                      </div>
                    </article>
              </form>
            </div>
    
    )
}

export default FoodBox;