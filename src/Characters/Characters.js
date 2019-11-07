import React, { Component } from 'react';
import axios from 'axios';

class Characters extends Component {

    state = {
        characters: null,
        relatedProgram: null
    }

    componentDidUpdate() {
        if (this.state.relatedProgram !== this.props.id) {
            axios.get('http://localhost:8000/api/program/' + this.props.id + '/characters/')
            .then(response => {
            this.setState({characters: response.data.data});
            this.setState({relatedProgram: this.props.id});
            })
        }
    }

    render() {
        if (this.state.characters) {
            const characters = this.state.characters.map(character => {
                return (
                    <div>{character.name}</div>
                ) 
            });
            return (
            <div>{characters}</div>
            )
        }
        else {
            return (
            <div>
                Loading!
            </div>
            )
        }
    } 
        
};

export default Characters;