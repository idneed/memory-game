import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='dashboard-header'>
          <h1 className='dashboard-title' >Bienvenue dans le Memory Game <span id='username' >{this.props.username}</span></h1>
      </header>
    )
  }
}
