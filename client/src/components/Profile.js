import uuid from 'uuid';

import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Profile extends React.Component {
    state = {
        items: [
            { id: uuid(), name: 'Name' },
            { id: uuid(), name: 'Occupation' },
            { id: uuid(), name: 'Years Experience' },
            { id: uuid(), name: 'Price' }
        ]
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Include any details for Contract" />
                </FormGroup>
                <FormGroup>
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
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Make An Offer Option</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Select If You Want a "Make An Offer" Option
            </Label>
                    </FormGroup>

                </FormGroup>


                <Button color="primary"
                    style={{ marginBotttom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}>Submit</Button>
            </Form>
        );
    }
}

export default Profile;