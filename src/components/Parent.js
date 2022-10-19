import React from 'react';
import { Child } from './Child';

export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
        name: 'Frarthur',
        
    };

    //function to pass to child
    this.changeName = this.changeName.bind(this)
  }

  changeName(newName) {
    this.setState({
        name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}