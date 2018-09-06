import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "21" },
      { name: "Maxi", age: "22" },
      { name: "Maximm", age: "23" }
    ],
    otherValue: "Im otherValue",
    toggler: false
  };

  nameHandler = newName => {
    // console.log('button clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Nomi';
    this.setState({
      persons: [
        { name: newName, age: "21" },
        { name: "Maxi", age: "22" },
        { name: "Maximm", age: "24" }
      ]
    });
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

  togglePersonsHandler = () => {
    const { toggler } = this.state;
    this.setState({ toggler: !toggler });
  };

  render() {
    const { toggler } = this.state;
    const style = {
      backgroundColor: "white",
      font: "inherit",
      cursor: "pointer",
      padding: "8px",
      border: "1px solid blue"
    };
    return (
      <div className="App">
        <h1>Hi,</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {toggler ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.nameHandler.bind(this, "Nomi!")}
            >
              My Hobbies Namaz
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
