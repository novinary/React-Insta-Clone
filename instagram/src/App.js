import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
      <PostsPage />
      </div>
    );
  }
}

//Invoke HOC function
export default withAuthenticate(App);
