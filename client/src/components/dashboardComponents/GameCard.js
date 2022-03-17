import React, { Component } from 'react'
import '../../assets/css/game-card.css'

export default class GameCard extends Component {

  constructor(props){
    super(props)
    this.state={
      img:""
    }
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount(){
    import("../../"+this.props.card.img_url)
    .then(img=>{
        this.setState({img:img.default})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  handleShow(){
    const card = {
      cardName:this.props.card.name,
      cardIndex:this.props.cardIndex
    }
    this.props.handleClick(card)
  }

  
  render() {
    
    return !this.props.isOpen ?
      (
        <div className={`card back ${!this.props.isOpen&&"flip-animation"}`} onClick={this.handleShow}>
          <p>?</p>
        </div>
      )
    :
      (
        <div className='card front' >
            <img className={`card front ${this.props.isOpen&&"flip-animation"}`} src={this.state.img} alt={this.props.card.name}/>
        </div>
      )
  }
}
