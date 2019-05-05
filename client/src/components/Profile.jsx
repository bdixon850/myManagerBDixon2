import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import axios from 'axios';
export default class Profile extends Component {
    state = {
        name: '',
        username: '',
        occupation: '',
        price: '',
        errorMessage: ''

    };
    handleSubmit = event => {
        event.preventDefault();
        const { username, name, occupation, price } = this.state;
        axios({
            url: "/profile",
            method: "POST",
            data: {
                username,
                name,
                occupation,
                price

            }
        })
            .then(response => {
                this.props.history.push("/contractor");
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.response.data.message
                });
            });
        this.handleScheduleClick = this.handleScheduleClick.bind(this)
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleProfileClick(e) {
        e.preventDefault();
        window.location.href = '/profile'
        alert('Thanks for your Payment! Lets Get Some Money!')
    }
    render() {

        //JSX
        return (
            <div>
                <Form onSubmit={this.handleProfileClick}>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="with a placeholder" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Occupation</Label>
                        <Input type="text" name="occupation" id="examplePassword" placeholder="occupation placeholder" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Price</Label>
                        <Input type="text" name="price" id="exampleText" placeholder="Include any details for Contract" onChange={this.handleChange} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Upload 10-99

                    </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Upload Invoice

                    </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Upload Rider/Contract Details

                    </FormText>
                    </FormGroup> */}
                    <FormGroup tag="fieldset">
                        <legend>Make An Offer Option</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Select If You Want a "Make An Offer" Option
            </Label>
                        </FormGroup>

                    </FormGroup>


                    <Button color="warning"
                        style={{ marginBotttom: '2rem' }} onClick={this.handleProfileClick}>Submit</Button>
                </Form>
                <p>{this.state.errorMessage}</p>

            </div >
        );
    }

}