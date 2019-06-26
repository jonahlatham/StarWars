import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import LoopedCard from './LoopedCard'

const baseUrl = 'https://swapi.co/api/people'

class App extends Component {
  state = {
    cards: [],
    deadCards: [],
  }
  componentDidMount() {
    axios.get(`${baseUrl}`)
      .then((response) => {
        this.setState({
          cards: response.data.results,
        })
      })
  }
  handleKill = (obj) => {
    const toKillList = this.state.cards.filter((e, i) => {
      return e.url !== obj.url
    })
    const deadList = [...this.state.deadCards, obj]
    this.setState({
      cards: toKillList,
      deadCards: deadList
    })
  }
  render() {
    const loopedCards = this.state.cards.map((e, i) => {
      return <LoopedCard key={i} card={e} handleKill={this.handleKill} />
    })
    const deadGuys = this.state.deadCards.map((e, i) => {
      return <LoopedCard key={i} card={e} name={'black'} color={'red'} handleKill={this.handleKill} />
    })
    return (
      <div className="App">
        <div className='upDown'>
          <div className='words'>
            <div className='kill'>Kill</div>
            <div className='killed'>Killed</div>
          </div>
          <div className='sideSide'>
            <div className='killSide'>
              {loopedCards}
            </div>
            <div className='toBeKilledSide'>
              {deadGuys}
            </div>
          </div>
        </div>
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