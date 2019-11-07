import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Program from './Program/Program';
import Characters from './Characters/Characters';

class App extends Component {

  state = {
    programs: [],
    selectedProgram: 0,
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/programs/')
    .then(response => {
      this.setState({programs: response.data.data});
    });
  }

toggleCharactersHandler = (programId) => {
  this.setState({selectedProgram: programId});
}

  render() {

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
        {programs}
        <Characters id={this.state.selectedProgram} />
      </div>
    );
  };

}

export default App;