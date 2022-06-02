import React from "react";
import { useState } from "react";

const AddFoodForm = (props) => {

const [ name, setFoodName] = useState('')
const [ calories, setCalories] = useState('')
const [ image, setImage] = useState('')

const handleFormSubmit = (event) => {
    event.preventDefault();
    const id = Math.random()
    const newFood = { name, calories, image: "https://i.imgur.com/BMdJhu5.jpg", id }
    props.addFood(newFood)
    console.log(newFood)
    setFoodName('')
    setCalories('')
    setImage('')
    props.toggleForm()
}

const handleFoodInputChange = (event ) => {
    const value = event.target.value
    setFoodName(value)
}

const handleCaloriesInputChange = (event ) => {
    const value = event.target.value
    setCalories(value)
}

const handleImageInputChange = (event ) => {
    const value = event.target.value
    console.log(value)
    setImage(image)
}

    return(
        <form onSubmit={handleFormSubmit} >
            <div className="field">
                <label className="label">Name of Food</label>
                <div className="control">
                    <input className="input" value={name} type="text" onChange={handleFoodInputChange} placeholder='New Food...' />
                </div>
            </div>
            <div className="field">
                <label className="label">Number of Calories</label>
                <div className="control">
                    <input className="input" value={calories} onChange={handleCaloriesInputChange} />
                </div>
            </div>
            <div className="file">
                <label className="file-label">
                 <input className="file-input" value={image} onChange={handleImageInputChange} type="file" name="resume"/>
                 <span className="file-cta">
                   <span className="file-icon">
                     <i className="fas fa-upload"></i>
                   </span>
                   <span className="file-label">
                     Choose a file…
                   </span>
                 </span>
                 </label>
            </div>
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    )
}

export default AddFoodForm;