import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Program from './Program/Program';
import Character from './Character/Character';

class App extends Component {

  state = {
    programs: [],
    characters: [],
    characterComments: [],
    selectedProgram: 0,
    showCharacters: false
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/programs/')
    .then(response => {
      this.setState({programs: response.data.data});
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!")
    axios.get('http://localhost:8000/api/program/' + this.state.selectedProgram + '/characters/')
    .then(response => {
      this.setState({characters: response.data.data});
    });
  }

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

    const programs = this.state.programs.map(program => {
      return <Program
      name={program.name}
      description={program.description}
      programId={program.id}
      clicked={() => this.toggleCharactersHandler(program.id)}
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