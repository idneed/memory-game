import React, { Component } from 'react'
import axios from 'axios'

import '../../assets/css/dashboard.css'

import GameScene from './GameScene'
import Header from './Header'
import BestTimeList from './BestTimeList'
import GameOptions from './GameOptions'



export default class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
      decks:[],
      timeRecords:[],
      gameOptions:{
        deckName:"Fruits",
        deckNumber:9,
        gameTime:60
      }
    }
    this.getAllGameDecks = this.getAllGameDecks.bind(this)
    this.getBestTimeList = this.getBestTimeList.bind(this)
    this.changeGameDeck = this.changeGameDeck.bind(this)
  }

  componentDidMount(){

   ( async () => {
      const decks = await this.getAllGameDecks()
      console.log(decks)
      const timeRecords = await this.getBestTimeList()
      this.setState((prevState)=>({
        ...prevState,
        decks,
        timeRecords
      }))

    })()
    
  }

  async getAllGameDecks(){
    const gameDecks = await axios.get('http://localhost:5000/api/gamedecks/')
    return gameDecks.data
  }

  async getBestTimeList(){
    const bestTimeList = await axios.get('http://localhost:5000/api/timeRecords')
    return bestTimeList.data
  }

  changeGameDeck(e,deckName){
    e.preventDefault()
    
    this.setState(prevState=>({
      ...prevState,
      gameOptions:{
        deckName
      }
    }))

  }

  render() {
    return (
      <section className='dashboard-section'>

        <Header username={this.props.username} />

        <div className='dashboard-content'>
          <BestTimeList timeRecords={this.state.timeRecords} />
          <GameScene gameOptions={this.state.gameOptions} gameDecks={this.state.decks} />
         <GameOptions decks={this.state.decks} changeGameDeck={this.changeGameDeck} />
        </div>
        

      </section>
    )
  }
}
