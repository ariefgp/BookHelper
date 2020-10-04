import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class Global extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'} )
            .then(response => response.json())
            .then(json => console.log(json));
    }

    render() {
        return (
            <div className="global">
                <h2>Book Explorer!</h2>
                <FormGroup>
                <InputGroup className="mb-3 search-bar">
                    <FormControl
                        placeholder="Search Book's Title"
                        aria-label="Search Book's Title"
                        aria-describedby="basic-addon2"
                        onChange={event => this.setState({query: event.target.value})}
                        onKeyPress={event => {
                            if (event.key === 'Enter'){
                                this.search();
                            }
                        }}
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