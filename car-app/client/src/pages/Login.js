import React, { Component } from 'react';

class Login extends Component{

    state = {
        username: "",
        password: "",
        fullname: "",
        address: "",
        email: "",
        response: ""
    }

    handleSubmitLogin = async e => {
        e.preventDefault();
        const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            username: this.state.username,
            password: this.state.password
        }),
        });
        const body = await response.text();
        this.setState({ response: body });
    }

    handleSubmitSignup = async e => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname,
            address: this.state.address,
            email: this.state.email
        }),
        });
        const body = await response.text();
        this.setState({ response: body });
    }

    render(){
        return (
            <>
                <div className="flex-div">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="basic-div">
                                        <form onSubmit={this.handleSubmitSignup}>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <div className="flex-div">
                                                            <h2>Username:</h2>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input id="textUsername" type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></input>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="flex-div">
                                                            <h2>Password:</h2>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input id="textPassword" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="flex-div">
                                                            <h2>Full Name:</h2>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input id="textFullname" type="text" value={this.state.fullname} onChange={e => this.setState({ fullname: e.target.value })}></input>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="flex-div">
                                                            <h2>Address:</h2>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input id="textAddress" type="text" value={this.state.address} onChange={e => this.setState({ address: e.target.value })}></input>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="flex-div">
                                                            <h2>Email:</h2>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input id="textEmail" type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div className="flex-div">
                                                <input id="buttonSubmit" type="submit" value="Signup"></input>
                                            </div>
                                        </form>
                                    </div>
                                </td>
                                <td>
                                    <div className="basic-div">
                                        <form onSubmit={this.handleSubmitLogin}>
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
                                                            <input id="textPassword" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {this.state.response}
                </div>
            </>
        );
    }
}

export default Login;
