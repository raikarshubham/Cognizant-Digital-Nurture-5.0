import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class App extends Component {

    constructor() {

        super();

        this.state = {
            loggedIn: false
        };

    }

    login = () => {

        this.setState({
            loggedIn: true
        });

    };

    logout = () => {

        this.setState({
            loggedIn: false
        });

    };

    render() {

        if (this.state.loggedIn) {

            return (

                <div>

                    <button onClick={this.logout}>
                        Logout
                    </button>

                    <User />

                </div>

            );

        }

        else {

            return (

                <div>

                    <button onClick={this.login}>
                        Login
                    </button>

                    <Guest />

                </div>

            );

        }

    }

}

export default App;