import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {id: 'ad', name: 'Imran', age: 24 },
      {id: 'ds', name: 'Bushra', age: 23 },
      {id: 'er', name: 'Imbush', age: 47 }
    ],
    crush: 'how are you',
    showPerson: false
  }

  deleteHandler=(personIndex)=>{

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  onChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person ={
     ...this.state.persons[personIndex]
    };

   
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons: persons});
    
    this.setState({ persons: persons })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            click={this.deleteHandler}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=>this.onChangeHandler(event, person.id)}/>
          })}
            
          </div>

      );
    }
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style}
          onClick={() => { this.toggleHandler('ImranShabbirQuadri') }}>TogglePerson</button>
          {persons}

       

      </div>
    );
    //const tx = <h1>'does this work now'</h1>;
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
