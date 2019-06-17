import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const baseUrl = 'https://swapi.co/api/people'

class App extends Component {
  state = {
    starWarsLoop: [],
  }
  componentDidMount() {
    axios.get(`${baseUrl}`)
    .then((response) => {
        this.setState({
          starWarsLoop: response.data.results
        })
        console.log(response)
      })
  }
  getFilms = (obj) => {
    const filmUrls = obj.starships.map((e,i) => {
      return axios.get(e)
    })
    Promise.all(filmUrls)
    .then((response) => {
      console.log(response.map((e,i)=>{
        return e.data
      }))
    })
  }
  render() {
    const starWarsGuys = this.state.starWarsLoop.map((e, i) => {
      return <div onClick={() => {this.getFilms(e)}} key={i}>{e.name}({e.films.length})</div>
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
// when killed card moves from left to right and
        // changes from green to red