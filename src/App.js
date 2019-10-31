import React, { Component } from 'react';
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
    }],
    characterComments: [],
    selectedProgram: 0
  }

/* TODO: Use Axios instead
  componentDidMount() {
    fetch('http://localhost:8000/api/programs/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ programs: data.data })
    })
  }
*/

  render() {

    let progs = null;

    progs = (
      <div>
        {this.state.programs.map((programs, index) => {
          return <Program
          name={programs.name}
          description={programs.description}
          />
        })}
      </div>
    );

    let chars = null;

    chars = (
      <div>
        {this.state.characters.map((characters, index) => 
        <Character 
        name={characters.name}
        description={characters.description} />)}
      </div>
    );

    return (
      <div>
        <h1>{this.props.title}</h1>
        {progs}
        {chars}
      </div>
    );
  };

}

export default App;