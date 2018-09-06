import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1g23', name: "Max", age: "21" },
      { id: 'qjhe3', name: "Maxi", age: "22" },
      { id: 'wkj4', name: "Maximm", age: "23" }
    ],
    otherValue: "Im otherValue",
    toggler: false
  };

  nameChangedHandler = event => {
    // console.log('button clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Nomi';
    this.setState({
      persons: [
        { name: "Nomi", age: "21" },
        { name: event.target.value, age: "22" },
        { name: "Maximm", age: "24" }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const { persons } = this.state;
    const person = [...persons]
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
      backgroundColor: "white",
      font: "inherit",
      cursor: "pointer",
      padding: "8px",
      border: "1px solid blue"
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
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi,</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {guy}
      </div>
    );
  }
}

export default App;
