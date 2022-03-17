import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
import '../assets/css/home.css'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      username:"",
      isConnected:false,
      error:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    if(this.state.error !== ""){
      this.setState({error:""})
    }
    this.setState({username:e.target.value})
  }

  handleClick(e){
    e.preventDefault()
    if(this.state.username !== ""){
      localStorage.setItem('username',this.state.username)
      this.setState({isConnected:true})
    } else {
      this.setState({error:"Tu veux bien rentrer un jolie nom stp ?"})
    }
  }

  render() {
    return this.state.isConnected ? 
    <Navigate to="/dashboard"/>
    :(
      <section className='home-section'>
        <div className='home-container' >
            <h1 className='home-title'>Bienvenue au memory game</h1>
            <h3>Entre un nom et devient le plus rapide de l'histoire du memory !</h3>
            <input type='text' name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
           <p className='error'>{this.state.error}</p>
            <button type="button" className="home-button" onClick={this.handleClick}>Let's GO !!</button>
        </div>
      </section>
    )
  }
}
