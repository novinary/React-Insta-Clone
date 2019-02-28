import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

//SearchBar Component returns social media icon elemnts as the result
const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="left-side">
        <i className="fab fa-instagram" />
        <h1>|</h1>
        <h2 className="instagram-logo">Instagram</h2>
      </div>
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          name="searchText"
          onChange={props.searchHandler}
        />
      </form>
      <div className="search-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};


export default SearchBar;
