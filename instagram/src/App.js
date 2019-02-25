import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  // filter method to filter the data based on what the user enters in the search input
  searchHandler = event => {
    this.setState({
      posts: this.state.posts.filter(item => {
        return item.username.includes(event.target.value);
      })
    });
  };

  //Used componentDidMount() to set data to the component's state.
  //Used the state object to pass data to PostContainer component.
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} />
        {<PostContainer posts={this.state.posts} />}
      </div>
    );
  }
}

export default App;
