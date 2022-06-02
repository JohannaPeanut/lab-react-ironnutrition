import React from "react";

const TodayFoodList = (props) => {

    const handleRemoval = (item) => {
        props.removeFunction(item)
    }

    //const [totalCalories, setTotalCalories] = useState(0)
    
    return (

           <div className="field">
               <h2>Today's Food</h2>
                    <ul>
                        {props.food.map(item => {
                            return (
                             <li key={item.id}>{item.no} {item.name} {Number(item.calories)*Number(item.no)} <button onClick={()=>handleRemoval(item)}>🛢</button></li>
                            )
                        })}
                    </ul>
                <h2>Total {props.food.reduce(
                    (acc, obj) => acc + obj.calories*obj.no, 0)} calories</h2>
            </div>
    
    )
}

export default TodayFoodList;