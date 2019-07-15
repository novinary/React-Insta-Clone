import React, { Component } from 'react';
import Login from '../Login/Login';

const withAuthenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }

        // Here we are checking localStorage
        //to see if a user is logged in,
        //and setState accordingly
        componentDidMount() {
            if (localStorage.getItem('username')) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }
        render() {
            //check if a user is logged in 
            //from the state boolean glad
            //if a user is logged in we wil
            //retrun the <App />/<PostsPage /> , else <Login?
            return this.state.loggedIn ? <App /> : <Login />
        }
    };


export default withAuthenticate;