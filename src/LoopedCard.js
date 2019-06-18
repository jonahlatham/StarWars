import React, { Component } from 'react'

class LoopedCard extends Component {
    render() {
        return (
            <div className='hitCards' style={{ backgroundColor: this.props.color, color : this.props.name }}>
                <u>{this.props.card.name}</u>
                <div className='infoBox' >
                    Gender: {this.props.card.gender} <br />
                    Height: {this.props.card.height} <br />
                    Hair Color: {this.props.card.hair_color} <br />
                    Skin Color: {this.props.card.skin_color} <br />
                    Eye Color: {this.props.card.eye_color} <br />
                </div>
                <button className='killBtn' onClick={() => {this.props.handleKill(this.props.card)}}>kill</button>
            </div>
        )
    }
}

export default LoopedCard