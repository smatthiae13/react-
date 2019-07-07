import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 31 },
      { name: "Sam", age: 29 },
      { name: "Fred", age: 32 }
    ],
    otherState: "some other value",
    showPersons: false        //doesnt show the persons
  };
//the persons area here is our data source - larger apps would fetch data from a server here


  switchNameHandler = newName => {
    // console.log('Was clicked');
    // DONT DO THIS this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Sam", age: 29 },
        { name: "Frederica", age: 32 }
      ],
      otherState: "some other value",
      showPersons: false
    });
    // this method allows us to update / merge
  };

  // assigned a function to a property

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 31 },
        { name: event.target.value, age: 29 },
        { name: "Frederica", age: 32 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",       //these have to have quotes because they are javascript
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
      
    };

    let persons = null; //this should be default

    //in here it is all jscript, not jsx        //showPersons id boolean

  //function inside map will execute on every persons array
  //map makes the javascript work for jsx (i think this the right explanation)
  //return what i want to map item into: returns a new array(a jscript array with jsx objects in it tp render to screen)
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name} 
            age={person.age} />
          })}
          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <button
          style={style} //returns the style variable from above
          onClick={() => this.togglePersonsHandler("Maximilian!!")}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;


//line 32 can be inefficient, bind is a better use

// {/* dont add perenthesis after switchNameHandler, it will render immediately */ }

//remember react is javascript


