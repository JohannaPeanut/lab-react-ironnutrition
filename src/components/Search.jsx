import React from "react";
import { useState } from "react";

const Search = (props) => {

    const[ searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (event) => {
        const value = event.target.value;
        props.filterFunction(value)
        setSearchTerm(value)
    }
    
    return (

           <div className="field">
                 <input className="input is-primary" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />   
            </div>
    
    )
}

export default Search;