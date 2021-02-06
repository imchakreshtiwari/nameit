import React from 'react';
import './Searchbox.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type Input"
                className="search-input"></input>
        </div>
    )
}
export default SearchBox;