import React, { Component } from 'react'
import {Navigate} from 'react-router-dom'

export default class PrivateRoutes extends Component {
  render() {
      const username = localStorage.getItem("username")
    return  username !== undefined ? this.props.render(username) : <Navigate to="/" />
  }
}
