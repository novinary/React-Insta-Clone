import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredData: []
    };
  }
  searchHandler = username => {
    console.log("called with " + username);
    if (username.length === 0) {
      this.setState({ filteredData: this.state.posts });
      return;
    }
    const newFilterData = this.state.posts.filter(data => {
      return data.username === username;
    });
    console.log("new data  " + newFilterData);
    this.setState({ filteredData: newFilterData });
  };

  //Used componentDidMount() to set your data to the component's state.
  //Used the state object to pass data to PostContainer component.
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchHandler} />
        {<PostContainer posts={this.state.posts} />}
      </div>
    );
  }
}

export default App;
