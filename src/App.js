import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state={
    persons: [
      { name: 'Imran', age: 24},
      { name: 'Bushra', age: 23},
      { name: 'Imbush', age: 47}
    ],
    crush: 'how are you'
  }

  switchHandler=(newName)=>{
    // console.log("Was Clicked");

    this.setState({
      persons:[
        { name: newName, age: 24},
        { name: 'Bushra ', age: 23},
        { name: 'Imbush', age: 48}
      ]
    })
  }

  onChangeHandler =(event)=> {
    this.setState({
      persons:[
        { name: 'Imran', age: 24},
        { name: event.target.value, age: 23},
        { name: 'Imbush', age: 47}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
    };
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style}
         onClick={()=>{this.switchHandler('ImranShabbirQuadri')}}>Switch</button>
        
        <Person 
        name ={this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
        
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click={this.switchHandler.bind(this, 'Imran!')}
        changed={this.onChangeHandler}>My Hobby is: Racing </Person>
        
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
        
      </div>
    );
    //const tx = <h1>'does this work now'</h1>;
   //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
}
}

export default App;
