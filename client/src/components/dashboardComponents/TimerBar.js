import React, { Component } from 'react'

export default class TimerBar extends Component {

    constructor(props){
        super(props)
        this.state={
            timeLeft:0,
            barWidth:100
        }
        this.intervalId = null
    }
 
    componentDidMount(){
         this.intervalId = setInterval(()=>{

            if(this.state.timeLeft === this.props.gameTime){
                clearInterval(this.intervalId)
                this.props.gameover()
            }
            this.setState(pv => ({
                timeLeft:(pv.timeLeft+1),
                barWidth:(pv.barWidth - (100 / this.props.gameTime))
            }))
        },990)
    }

    componentDidUpdate(){
        if(this.props.isWinner){
            clearInterval(this.intervalId)
            this.intervalId = null
            this.props.gameWin(this.state.timeLeft)
        }

    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
        this.intervalId = null
    }


  render() {
    const {barWidth} = this.state
    let color = barWidth < 50 && barWidth > 35  ? "#F2CB05" 
                : barWidth < 35 && barWidth > 20 ? "#D9A404" : barWidth < 20 && "#F20505" 
    return (
      <div className='timer-container'>
            <div  style={{width:`${this.state.barWidth}%`,backgroundColor:color}} sty className='timer-bar'></div>
      </div>
    )
  }
}
