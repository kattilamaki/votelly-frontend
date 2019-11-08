import React, { Component } from 'react';
import axios from 'axios';
import Character from '../Characters/Character/Character';
import Comments from '../Comments/Comment/Comment';

class Characters extends Component {

    state = {
        characters: null,
        relatedProgram: null,
        selectedCharacter: null
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

    toggleCharactersHandler = (characterId) => {
        this.setState({selectedCharacter: characterId});
    }

    render() {
        if (this.state.characters) {
            const characters = this.state.characters.map(character => {
                return (
                    <div>
                        <Character
                        name={character.name}
                        description={character.description}
                        numberOfVotes={character.number_of_votes}
                        key={character.id}
                        clicked={() => this.toggleCharactersHandler(character.id)} />
                    </div>
                ) 
        });
        
        return (
        <div>
        {characters}
        <Comments id={this.state.selectedCharacter} />
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