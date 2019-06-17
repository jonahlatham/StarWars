import React, { Component } from 'react'

class LoopedCard extends Component {
    state={
        backgroundColor: 'black',
        fontColor: 'red',
        buttonText: 'Kill',
    }
    handleKill = () => {
        this.setState({
            backgroundColor : this.state.backgroundColor === 'red' ? 'black' : 'red',
            fontColor : this.state.fontColor === 'black' ? 'red' : 'black',
            buttonText : this.state.buttonText === 'Revive' ? 'Kill' : 'Revive'
        })
    }
    render() {
        return (
            <div className='hitCards' style={{ backgroundColor: this.state.backgroundColor, color : this.state.fontColor }}>
                <u>{this.props.card.name}</u>
                <div className='infoBox' >
                    Gender: {this.props.card.gender} <br />
                    Height: {this.props.card.height} <br />
                    Hair Color: {this.props.card.hair_color} <br />
                    Skin Color: {this.props.card.skin_color} <br />
                    Eye Color: {this.props.card.eye_color} <br />
                </div>
                <button className='killBtn' onClick={this.handleKill}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default LoopedCard