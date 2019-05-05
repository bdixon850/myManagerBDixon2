import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: ''

    };

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        axios({
            url: "/authenticate/signin",
            method: "POST",
            data: {
                username,
                password,

            }
        })
            .then(response => {
                const isAuthenticated = response.data.isAuthenticated;
                window.localStorage.setItem('isAuthenticated', isAuthenticated);
                this.props.history.push("/profile");
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.response.data.message
                });
            });
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {

        const isAuthenticated = window.localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            return <Redirect to='/profile' />
        }

        //JSX
        return (
            <div>
                <Form onSubmit={this.handleSubmit} inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="text" name="username" id="exampleEmail" placeholder="user@mail.com" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="SecretPassword" onChange={this.handleChange} />
                    </FormGroup>

                    <Button color="primary">SignIn</Button>

                    {/* <Button color="warning">SignUp</Button> */}
                </Form>
                <p>{this.state.errorMessage}</p>
                {/* <h2>Login Component</h2>
                <Form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <input type="password" name="password" onChange={this.handleChange} />

                    <button>Login</button>
                </Form>
                <p>{this.state.errorMessage}</p> */}
            </div >
        );
    }

}
