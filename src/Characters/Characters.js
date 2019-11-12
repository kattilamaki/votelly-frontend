import React, { Component } from 'react';
import axios from 'axios';
import Character from '../Characters/Character/Character';
import Comments from '../Comments/Comments';

class Characters extends Component {

    state = {
        characters: null,
        selectedProgram: null,
        selectedCharacter: null
    }

    componentDidUpdate() {
        if (this.state.selectedProgram !== this.props.selectedProgram) {
            axios.get('http://localhost:8000/api/program/' + this.props.selectedProgram + '/characters/')
            .then(response => {
            this.setState(
                {characters: response.data.data,
                selectedProgram: this.props.selectedProgram});
            })
        }
    }

    toggleCharactersHandler = (characterId) => {
        this.setState({selectedCharacter: characterId});
    }

    render() {
        if (this.state.characters) {
            const characters = this.state.characters.map(character => {
                return (
                    <div key={character.id}>
                        <Character
                        name={character.name}
                        description={character.description}
                        numberOfVotes={character.number_of_votes}
                        clicked={() => this.toggleCharactersHandler(character.id)} />
                    </div>
                ) 
        });

        return (
        <div>
        {characters}
        <Comments 
            selectedCharacter={this.state.selectedCharacter}
            selectedProgram={this.state.selectedProgram} />
        </div>
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