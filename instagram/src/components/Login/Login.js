import React, { Component } from 'react';
import './Login.css';

//Below component should invoke the login function in Login.js when a user logs in
class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }

    handleLoginChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    //set a username on localStorage
    handleLoginSubmit = (event) => {
        localStorage.setItem('username', `${this.state.username}`);
    };

    render() {
        return (
            <div>
                <form className="login-form">
                    <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleLoginChange} />
                    <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleLoginSubmit} />
                    <button onClick={this.handleLoginChange}>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;