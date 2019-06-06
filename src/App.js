import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 31},
      {name: "Sam", age: 29},
      {name: "Fred", age: 32}
    ]
  }


  render() {
    return (
      <div className="App">
       <h1>Hi, I am a React app</h1>
       <button>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].name} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].name} >My Hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
       {/* this refers to the class */}
      </div>
    );
  }
}

export default App;
