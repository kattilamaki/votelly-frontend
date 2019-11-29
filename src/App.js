import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Program from './Program/Program';
import Characters from './Characters/Characters';
import TopMenu from './TopMenu/TopMenu'

class App extends Component {

  state = {
    programs: [],
    selectedProgram: 0,
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/programs/')
    .then(response => {
    this.setState({programs: response.data.data});
    })
  }

toggleProgramsHandler = (programId) => {
  this.setState({selectedProgram: programId});
}

  render() {

    const programs = this.state.programs.map(program => {
      return <Program
      name={program.name}
      description={program.description}
      imageUrl={program.image}
      programId={program.id}
      key={program.id}
      clicked={() => this.toggleProgramsHandler(program.id)}
      />
    });

    return (
      <div>
        <TopMenu />
        {programs}
        <Characters
          selectedProgram={this.state.selectedProgram} />
      </div>
    );
  };

}

export default App;