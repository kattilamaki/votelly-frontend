import React, { Component } from 'react';
import './App.css';
import Program from './Program/Program';

class App extends Component {

  state = {
    programs: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/programs/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ programs: data.data })
    })
//    .catch(console.log)
  }

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

    return (
      <div>
        {progs}
      </div>
    );
  };

}

export default App;