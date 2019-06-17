import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const baseUrl = 'https://swapi.co/api/people/'

class App extends Component {
  state = {
    starWarsLoop: [],
  }
  componentDidMount() {
    const starWarsData = [];
    for (let i = 1; i <= 5; i++) {
      starWarsData.push(axios.get(`${baseUrl}/${i}`))
    }
    Promise.all(starWarsData)
      .then((response) => {
        this.setState({
          starWarsLoop: response.map((e, i) => {
            console.log(e.data)
            return e.data
          })
        })
      })
  }
  render() {
    const starWarsGuys = this.state.starWarsLoop.map((e, i) => {
      return <div key={i}>{e.name}</div>
    })
    return (
      <div className="App">
        {starWarsGuys}
      </div>
    );
  }
}
export default App;


// boba fett hit list 
// star wars characters
// make a hit list for boba fett
// button called kill
// when kill it moves car from left to right and
        // changes it 