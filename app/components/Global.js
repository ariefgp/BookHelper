import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class Global extends Component {
    search() {
        console.log('search');
    }

    render() {
        return (
            <div>
                <h2>Book Explorer!</h2>
                <FormGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Book's Title"
                        aria-label="Search Book's Title"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append onClick={() => this.search()}>
                        <Button variant="outline-secondary" >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

export default Global;