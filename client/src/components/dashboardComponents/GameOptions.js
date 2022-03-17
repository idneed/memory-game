import React, { Component } from 'react'

export default class GameOptions extends Component {
  render() {
    return (
        <>
            <div className='decks-choice-section'>
                <h3>Choisis ton Univers</h3>
                {
                this.props.decks.map( ({name,_id}) => (
                    <button 
                    key={_id} 
                    type='button' 
                    className='deck-choice-button'
                    onClick={(e)=>this.props.changeGameDeck(e,name)}
                    >
                    {name}
                    </button>
                ))
                }
            </div>
        </>
    )
  }
}
