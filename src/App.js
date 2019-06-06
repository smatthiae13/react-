import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I am a React app</h1>
       <Person name="Max" age="31" />
       <Person name="Sam" age="29" >My Hobbies: Racing</Person>
       <Person name="Fred" age="32" />
      </div>
    );
  }
}

export default App;
