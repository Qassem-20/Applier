import '../../assets/css/welcoming.css'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class about extends Component {
  render() {
    return (
      <div className='container-about' id='About'>
      <h4>About</h4>
        <p>change your language</p>
        <div id="google_translate_element">  </div>
      </div>  
    )
  }
}

export default about