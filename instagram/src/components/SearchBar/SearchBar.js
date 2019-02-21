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
            <hr/>
            <h2 className="instagram-logo">Instagram</h2>
            </div>
            <input className = "seach-input" type="text" placeholder= "Search"/>
            <div className="search-icons">
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
            </div>

        </div>
    )
}

export default SearchBar