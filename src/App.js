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

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DONT DO THIS this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        {name: newName, age: 31},
        {name: "Sam", age: 29},
        {name: "Frederica", age: 32}
      ]
    })
    // this method allows us to update / merge
  }

  // assigned a function to a property

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 31},
        {name: event.target.value, age: 29},
        {name: "Frederica", age: 32}
      ]
  })
}

  render() {
const style = {
  backgroundColor: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  cursor: "pointer"
  //these have to have quotes because they are javascript
};
    return (
      <div className="App">
       <h1>Hi, I am a React app</h1>
       <button 
       style={style} //returns the style variable from above
       onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> 

   {/* dont add perenthesis after switchNameHandler, it will render immediately */}
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].name} />
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].name} 
        click= {this.switchNameHandler.bind(this, "Max!")} 
        changed={this.changedNameHandler} >My Hobbies: Racing</Person>
        
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
       {/* this refers to the class */}
      </div>
    );
  }
}

export default App;

//line 32 can be inefficient, bind is a better use
