import React, { Component } from 'react';

class Login extends Component{

    state = {
        username: "",
        password: "",
        response: ""
    }

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: this.state.username }),
        });
        const body = await response.text();
        this.setState({ response: body });
    }

    render(){
        return (
            <>
                <div className="flex-div">
                    <div className="basic-div">
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tr>
                                    <td>
                                        <div className="flex-div">
                                            <h2>Username:</h2>
                                            <input id="textUsername" type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></input>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex-div">
                                            <h2>Password:</h2>
                                            <input id="textPassword" type="text" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex-div">
                                            <input id="buttonSubmit" type="submit" value="Login"></input>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    {this.state.response}
                </div>
            </>
        );
    }
}

export default Login;
