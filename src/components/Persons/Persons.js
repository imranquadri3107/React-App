import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[Persons.js] Inside ComponentWillMount')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componenetDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('UPDATE Persons.js Inside componentWillReceiveProps', nextProps);

  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('UPDATE Persons.js Inside shouldComponenetUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('UPDATE Persons.js Inside componenetWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('UPDATE Persons.js Inside componenetDidUpdate');

  }

  render(){
    console.log('[Persons.js] Inside Render()')
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
    } );
  }

}
export default Persons;
