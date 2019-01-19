import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input'

class App extends Component {
  constructor() {
    super();
    this.state = {
      myList: []
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    axios.get('/people/').then((response) => {
      this.setState({ myList: response.data})
    })
  }

  handleUpdate(data) {
    this.setState({ myList: data })
  }

  render() {
    let mapped = this.state.myList.map((item) => {
      return(
        <div>
          {item.name}<br/>
          {item.age} <br/>
          <Input updateList={this.handleUpdate} />
        </div>
        )
    })
    return (
      <div className="App">
        {mapped}
   
      </div>
    )
  }
}

export default App;
