import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Program from './Program/Program';
import Character from './Character/Character';

class App extends Component {

  state = {
    programs: [],
    characters: [{
      "name": "Character 1",
      "description": "First character for the votelly testing",
      "image_alt_text": "Anna askar photo",
      "number_of_votes": 0,
      "related_program": 1,
      "character_photo": "http://localhost:8000/pics/media/anna.png"
    }],
    characterComments: [],
    selectedProgram: 0,
    showCharacters: false
  }

  componentDidMount() {
    axios.get('http://localhost:1234/api/programs/')
    .then(response => {
      this.setState({programs: response.data.data});
      console.log(this.state.programs);
    });
  }

toggleCharactersHandler = (index) => {
  const doesShow = this.state.showCharacters;
  this.setState({showCharacters: !doesShow});
  console.log(this.state.selectedProgram);
}

  render() {

  let characters = null;

  if (this.state.showCharacters) {
    characters = (
      <div>
        {this.state.characters.map((characters, index) => 
        <Character 
        name={characters.name}
        description={characters.description} />)}
      </div>
    );
  }

    const programs = this.state.programs.map(program => {
      return <Program
      name={program.name}
      description={program.description}
      clicked={this.toggleCharactersHandler}
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