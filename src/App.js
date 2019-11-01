import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Program from './Program/Program';
import Character from './Character/Character';

class App extends Component {

  state = {
    programs: [{
      "name": "Test program 1",
      "description": "This is some test program that is for the development purposes. It is well and nice and everything else also!",
      "image_alt_text": "some image",
      "vote_question": "Is this program nice and fine for the stuff that so and that?"
  }, {
      "name": "Test program 2",
      "description": "Some other description",
      "image_alt_text": "sdfafdsaas",
      "vote_question": "HOW IS IT?"
  }],
    characters: [{
      "name": "Character 1",
      "description": "First character for the votelly testing",
      "image_alt_text": "Anna askar photo",
      "number_of_votes": 0,
      "related_program": 1,
      "character_photo": "http://localhost:8000/pics/media/anna.png"
    }, {
      "name": "Character 2",
      "description": "Second character for the votelly testing",
      "image_alt_text": "Anna askar photo",
      "number_of_votes": 0,
      "related_program": 1,
      "character_photo": "http://localhost:8000/pics/media/anna.png"
    }],
    characterComments: [],
    selectedProgram: 0,
    showCharacters: false
  }
/*
  componentDidMount() {
    axios.get('http://localhost:1234/api/programs/')
    .then(response => {
      this.setState({programs: response.data.data});
      console.log(this.state.programs);
    });
  }
*/

toggleCharactersHandler = (programId) => {
  const doesShow = this.state.showCharacters;
  this.setState({showCharacters: !doesShow});
  this.setState({selectedProgram: programId});
}

  render() {

  let characters = null;

  if (this.state.showCharacters) {
    characters = (
      <div>
        {this.state.characters.map(characters => 
        <Character 
        name={characters.name}
        description={characters.description} />)}
      </div>
    );
  }

    const programs = this.state.programs.map((program, index) => {
      return <Program
      name={program.name}
      description={program.description}
      clicked={() => this.toggleCharactersHandler(index)}
      programId={index + 1}
      />
    });
  
    return (
      <div>
        <h1>{this.props.title}</h1>
        {programs}
        {characters}
      </div>
    );
  };

}

export default App;