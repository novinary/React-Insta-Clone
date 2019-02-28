import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;


const SearchBarLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 6%;
`;

const Divider = styled.span`
font-size: 2.5rem;
font-weight: 100;
margin-left: 25px;
`;

const InstaLogo = styled.span`
font-size: 2.5rem;
font-weight: 100;
margin-left: 25px;
`;

const SearchIcons = styled.span`
font-size: 2.5rem;
font-weight: 100;
display: flex;
flex-direction: row;
padding: 8px 9%;
`;


//SearchBar Component returns social media icon elemnts as the result
const SearchBar = props => {
  return (

    <SearchBarContainer>
      <SearchBarLeft>
      <InstaLogo className="fab fa-instagram" />
        <Divider>|</Divider>
        <h2 className="instagram-logo">Instagram</h2>
      </SearchBarLeft>
   
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          name="searchText"
          onChange={props.searchHandler}
        />
      </form>
      <SearchIcons>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </SearchIcons>
      </SearchBarContainer>
  );
};


export default SearchBar;
