import React, { Component } from 'react';
import axios from 'axios';
import Character from '../Characters/Character/Character';
import Comments from '../Comments/Comments';
import Progress from '../Progress/Progress';

class Characters extends Component {

    state = {
        characters: null,
        selectedCharacter: null,
        showComments: false,
        update: false
    }

    componentDidUpdate() {
        if (this.state.selectedProgram !== this.props.selectedProgram || this.state.update === true) {
            axios.get('http://localhost:8000/api/program/' + this.props.selectedProgram + '/characters/')
            .then(response => {
            this.setState(
                {characters: response.data.data,
                selectedProgram: this.props.selectedProgram,
                showComments: false,
                update: false});
            })
        }
    }

    countTotalVotes = () => {
        let totalVotes = 0;
        this.state.characters.map(character => {
            totalVotes = totalVotes + character.number_of_votes;
        });
        return (totalVotes.toString())     
    }

    toggleCharactersHandler = (characterId) => {
        this.setState({selectedCharacter: characterId,
        showComments: true});
    }

    voteCharacterHandler = (name, description, votes, id, alt_text) => {
        const payload = {
            "name": name,
            "description": description,
            "number_of_votes": votes + 1,
            "image_alt_text": alt_text
        }
        axios.put('http://localhost:8000/api/characters/' + id, payload)
        .then(response => {
            this.setState( {update: true});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {

        if (this.state.characters) {
            const characters = this.state.characters.map(character => {
                return (
                    <div key={character.id}>
                        <Character
                        name={character.name}
                        imageUrl={character.character_photo}
                        imageAltText={character.image_alt_text}
                        description={character.description}
                        numberOfVotes={character.number_of_votes}
                        clicked={() => this.toggleCharactersHandler(character.id)} 
                        voted={() => this.voteCharacterHandler(character.name, character.description, character.number_of_votes, character.id, character.image_alt_text)} />
                    </div>
                )
            });

            const progress = this.state.characters.map(character => {
                return (
                    <Progress key={character.id}
                    characterName={character.name}
                    voteCount={character.number_of_votes}
                    totalVotes={this.countTotalVotes()} />
                )
            });

            return (
            <div>
            {characters}
            {progress}
            <Comments 
                selectedCharacter={this.state.selectedCharacter}
                showComments={this.state.showComments} />
            </div>
            )
        } else {
            return (<div>Select character to show comments</div>)
        }
    } 
        
};

export default Characters;