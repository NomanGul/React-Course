import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1g23", name: "Max", age: "21" },
      { id: "qjhe3", name: "Maxi", age: "22" },
      { id: "wkj4", name: "Maximm", age: "23" }
    ],
    otherValue: "Im otherValue",
    toggler: false
  };

  nameChangedHandler = (event, id) => {
    // console.log('button clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Nomi';
    const prevPersons = this.state.persons;
    const personIndex = prevPersons.findIndex(p => p.id === id);
    const person = { ...prevPersons[personIndex] };
    // ALTERNATIVE: const person = Object.assign({}, prevPersons[personIndex])
    person.name = event.target.value;
    const persons = [...prevPersons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const { persons } = this.state;
    const person = [...persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };

  togglePersonsHandler = () => {
    const { toggler } = this.state;
    this.setState({ toggler: !toggler });
  };

  render() {
    const { toggler, persons } = this.state;
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      cursor: "pointer",
      padding: "8px",
      border: "1px solid blue",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let guy = null;
    if (toggler) {
      guy = (
        <div>
          {persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }
    const classes = [];
    if (persons.length <= 2) {
      classes.push("red");
    }
    if (persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi,</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {guy}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
