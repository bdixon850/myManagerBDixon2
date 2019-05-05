import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


export default class Signup extends Component {
    state = {
        username: '',
        password: ''

    };
    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        axios({
            url: "/authenticate/signup",
            method: "POST",
            data: {
                username,
                password
            }

        })

            .then(response => {
                this.props.history.push("/profile");
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.response.data.message
                });
            });
    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        //JSX
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="text" name="username" id="exampleEmail" placeholder="user@mail.com" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="SecretPassword" onChange={this.handleChange} />
                    </FormGroup>

                    <Button color="primary">SignUp</Button>

                    {/* <Button color="warning">SignUp</Button> */}
                </Form>
                {/* <h2>Signup Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <input type="password" name="password" onChange={this.handleChange} />

                    <button>Signup</button>
                </form> */}
            </div>
        );
    }

}