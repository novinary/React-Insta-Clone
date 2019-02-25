import React from 'react'
import './SearchBar.css'
/*Note on React for future ref
When React sees an element representing a user-defined component, 
it passes JSX attributes to this component as a single object. 
- component names should always start with a capital letter. 
React treats components starting with lowercase letters as DOM tags
-

*/
//SearchBar Component returns social media icon elemnts as the result
const SearchBar= (props) => {
    return(
        <div className="search-bar">
            <div className="left-side">
            <i className="fab fa-instagram"></i>
            <h1>|</h1>
            <h2 className="instagram-logo">Instagram</h2>
            </div>
            <form>       
            <input className = "search-input" 
            type="text" 
            placeholder= "Search"
            name="searchText"
            onChange={props.searchHandler}
            />
            </form>


            
            <div className="search-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>

        </div>
    )
}

//invoke the props here


export default SearchBar