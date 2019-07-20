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



  // assigned a function to a property

  nameChangedHandler = (event, id )=> {


    
    this.setState({
      persons: [
        { id: 'asdf', name: "Max", age: 31 },
        { id: 'zxcv', name: event.target.value, age: 29 },
        { id: 'wert', name: "Frederica", age: 32 }
      ]
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];     //this is the more modern approach of slice-spreads out elements in array, that gets added to new array, but dont have old array itself
    persons.splice(personIndex, 1);          //here we are just changing the element it is pointing too-this line is a bad code idea-causes errors-use slice method
    this.setState({persons: persons});
  }

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
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
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

//key property: helps update the list effeciently:
//it helps keep track of which elements have changed and which didn't, so it only re-renders the one's who have changed
