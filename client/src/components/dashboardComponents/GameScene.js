import React, { Component } from 'react'
import GameCard from './GameCard'
import axios from 'axios'
import goodFeedBack from '../../assets/icons/good-icon.svg'
import badFeedBack from '../../assets/icons/bad-icon.svg'
import TimerBar from './TimerBar'

export default class GameScene extends Component {

  constructor(props){
    super(props)
    this.state ={
      start:false,
      cardsChoosen:[],
      cardsFound:[],
      feedBack:null
    }
    this.initGameScene = this.initGameScene.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleChoose = this.handleChoose.bind(this)
    this.handleIsOpen = this.handleIsOpen.bind(this)
    this.gameOver = this.gameOver.bind(this)
    this.gameWin = this.gameWin.bind(this)
    this.setFeedBackAnimation = this.setFeedBackAnimation.bind(this)
    this.feedBack = React.createRef()
  }

  handleStart(){
    this.setState({start:true})
  }

  initGameScene(){
    let deck = this.props.gameDecks.find(deck=>deck.name===this.props.gameOptions.deckName)
    let {deckNumber} = this.props.gameOptions
    let cards = deck.cards.slice(0,deckNumber)
    let result = cards.concat(cards).sort(()=>Math.random - 0.5)
    return result
  }

  handleChoose(card){

    const {cardsChoosen} = this.state

    if(cardsChoosen.length < 2) {
      this.setState((prevState)=>(
        {
          ...prevState,
          cardsChoosen:[...prevState.cardsChoosen,card]
        }
      ))

    }

  }

  handleIsOpen(cardIndex){
      const {cardsChoosen,cardsFound} = this.state
      let isOpen = false ;
      if(Boolean(cardsChoosen.find( card => card.cardIndex === cardIndex ))){
        isOpen = true
      }
      if(Boolean(cardsFound.find( card => card.cardIndex === cardIndex ))){
        isOpen =true
      }
            
      return isOpen
  }

  componentDidUpdate(){
    
    const {cardsChoosen} = this.state

    console.log(cardsChoosen)
    if(cardsChoosen.length === 2){
        if(cardsChoosen[0].cardName === cardsChoosen[1].cardName){
          this.setState((pv)=>({
            cardsChoosen:[],
            cardsFound:[...pv.cardsFound,...cardsChoosen],
            feedBack:true
          }))
          this.setFeedBackAnimation()
        }else{
          this.setFeedBackAnimation()
          setTimeout(()=>{
            this.setState((pv)=>({
              ...pv,
              cardsChoosen:[],
              feedBack:false
            }))
          },500)
        }
  
    }
  }

  setFeedBackAnimation(){
    let elem = this.feedBack.current 
    elem.style.display = "block"
    elem.classList.add('anim')
    setTimeout(() => {
      elem.style.display = "none"
      elem.classList.remove('anim')
    }, 1000);
  }

  gameOver(){
    this.setState(pv=>({...pv,start:false}))
    alert('perdu')
  }

  gameWin(time){
    let timeRecord = {
      username:localStorage.getItem("username"),
      time: time+'s'
    }
    axios.post("http://localhost:5000/api/timeRecords/",timeRecord)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
    setTimeout(()=>{
      this.setState({
        start:false,
        cardsChoosen:[],
        cardsFound:[],
        feedBack:null
      })
    },3000)
    alert("SUUUPEEER!! tu as gagné en "+this.state.timeLeft+' secondes')
  }
  
  
  render() {
   
   let cards =  this.props.gameDecks.length !== 0 && this.initGameScene()
    return (
      <div className='game-scene-section' >
        <div className='game-scene' >
            
            { this.state.start ?
             ( this.props.gameDecks.length !== 0 &&
              cards.map( (card,index)=> (
                <GameCard 
                  key={index}  
                  card={card} 
                  cardIndex={index}
                  isOpen={this.handleIsOpen(index)}
                  handleClick={this.handleChoose}
                />
              )))
              :
              (
                <div className='start-container'>
                  <button type='button' className='start-button' onClick={this.handleStart} >C'est parti !</button>
                </div>
              )
            }
            {
                <div ref={this.feedBack} style={{display:"none"}} className={`game-feedback ${ "anim"}`}>
                    <img src={this.state.feedBack ? goodFeedBack : badFeedBack} alt="feedback" />
                </div>
            }
        </div>
        {
          this.state.start && 
          <div className='timer-section'>
            <TimerBar gameWin={this.gameWin} isWinner={this.state.cardsFound.length === this.initGameScene().length} gameover={this.gameOver} gameTime={this.props.gameOptions.gameTime}/>
          </div>
        }
      </div>
    )
  }
}
